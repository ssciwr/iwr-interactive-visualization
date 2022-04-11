// @ts-nocheck

import { SVG, registerWindow } from "@svgdotjs/svg.js"; // eslint-disable-line
import "@svgdotjs/svg.filter.js"; // eslint-disable-line
import * as Data from "./data";
import * as Utils from "./utils";

// returns a window with a document and an svg root node
import { createSVGWindow } from "svgdom";
const window = createSVGWindow();
const document = window.document;

// register window and document
registerWindow(window, document);

const sorted_group_indices = Utils.sorted_indices(Data.group_names, 1);

let sort_by_group = false;

const shadowFilter = function (add) {
  add.blend(add.$source, add.gaussianBlur(1).in(add.$sourceAlpha));
};

function addSegments(
  svg,
  label,
  names,
  groups,
  color,
  radius,
  width,
  segmentClass
) {
  const delta = 360 / (names.length + 1);
  for (let i = 0; i < names.length; i++) {
    const group = svg
      .group()
      .addClass("iwr-vis-segment-item")
      .addClass(segmentClass)
      .addClass("highlighted");
    group.data("text", names[i]);
    group.data("groups", groups[i]);
    group.css({
      "transition-property": "opacity",
      "transition-duration": "0.6s",
    });
    group
      .path(
        Utils.makeSegment(radius, (i + 0.5) * delta, (i + 1.5) * delta, width)
      )
      .addClass("iwr-vis-segment-item-arc")
      .fill(color)
      .stroke("#ffffff")
      .attr("stroke-width", 0)
      .filterWith(shadowFilter);
    const strPath = group
      .path(Utils.makeTextArc(radius, (i + 0.5) * delta, (i + 1.5) * delta))
      .fill("none")
      .stroke("none");
    strPath
      .text(names[i])
      .addClass("iwr-vis-segment-item-text")
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.55em");
  }
  // label
  const groupLabel = svg.group();
  groupLabel
    .path(Utils.makeSegment(radius, -delta / 2.05, delta / 2.05, width))
    .fill("#ffffff");
  const labelPath = groupLabel
    .path(Utils.makeTextArc(radius, -delta / 2, delta / 2))
    .fill("none")
    .stroke("none");
  labelPath
    .text(label)
    .attr("startOffset", "50%")
    .attr("text-anchor", "middle")
    .attr("font-size", "0.66em")
    .attr("fill", color)
    .attr("font-weight", "bold");
  const arrow = groupLabel.marker(4, 4, function (add) {
    add.polyline([0, 0, 4, 2, 0, 4]).fill(color).stroke("none");
  });
  const txtAngle = 4 + label.length / 2;
  const arrowPadding = 3;
  groupLabel
    .path(
      Utils.makeArrowArc(
        radius,
        arrowPadding + txtAngle,
        delta / 2 - arrowPadding
      )
    )
    .fill("none")
    .stroke(color)
    .attr({ "stroke-width": 2 })
    .marker("end", arrow);
  groupLabel
    .path(
      Utils.makeArrowArc(
        radius,
        -arrowPadding - txtAngle,
        -delta / 2 + arrowPadding
      )
    )
    .fill("none")
    .stroke(color)
    .attr({ "stroke-width": 2 })
    .marker("end", arrow);
}

function addGroups(svg, names, method_weights, application_weights, colour) {
  const boxHeight = 60;
  const boxWidth = 200;
  const padding = 2;
  for (let i = 0; i < names.length; i++) {
    const groupContainer = svg.group();
    const group = groupContainer.group().addClass("iwr-vis-group-item");
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    group.css({
      transition: "opacity 0.6s, visibility 0.6s",
    });
    // box
    group
      .rect(boxWidth, boxHeight)
      .fill(colour)
      .stroke("none")
      .addClass("iwr-vis-group-item-box")
      .filterWith(shadowFilter);
    if (Data.show_groups === true) {
      // group name
      const numLines = countLines(names[i][1]);
      let txtTop = 0;
      const dy = 11;
      if (numLines === 1) {
        txtTop = 10;
      } else if (numLines === 2) {
        txtTop = 4;
      }
      for (const textLine of names[i][1].split("\n")) {
        group
          .text(textLine)
          .addClass("iwr-vis-group-item-groupname")
          .x(boxWidth / 2)
          .y(txtTop)
          .attr("startOffset", "50%")
          .attr("text-anchor", "middle")
          .fill("#0000ff")
          .attr("font-weight", "bold")
          .attr("font-size", "0.75em")
          .hide();
        txtTop += dy;
      }
      // small professor name
      group
        .text(Utils.shortenName(names[i][0], false))
        .x(boxWidth / 2)
        .y(txtTop + padding + 6 / numLines)
        .addClass("iwr-vis-group-item-profname-small")
        .attr("startOffset", "50%")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "0.75em")
        .hide();
    }
    // large professor name
    let dy = 0;
    for (const textLine of Utils.shortenName(names[i][0], true).split("\n")) {
      group
        .text(textLine)
        .y(10 + dy)
        .x(boxWidth / 2)
        .addClass("iwr-vis-group-item-profname-large")
        .attr("startOffset", "50%")
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em");
      dy += 25;
    }
    group.size(65, 20);
    // group.move(200 - 65 / 2, 200 - 20 / 2);
    addGroupCard(groupContainer, names[i], colour);
  }
}

function addGroupCard(svg, name, colour) {
  const group_card = svg.group().addClass("iwr-vis-group-card");
  const card_size = 210;
  group_card.circle(316).cx(200).cy(200).fill("#ffffff").stroke("none");
  group_card
    .rect(card_size, card_size)
    .cx(200)
    .cy(200)
    .fill(colour)
    .stroke("none")
    .filterWith(shadowFilter);
  let dy = 0;
  for (const textLine of name[1].split("\n")) {
    group_card
      .text(textLine)
      .x(200)
      .y(99 + dy)
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle")
      .fill("#0000ff")
      .attr("font-weight", "bold")
      .attr("font-size", "0.75em")
      .linkTo(name[2]);
    dy += 13;
  }
  group_card.css({ opacity: 0, visibility: "hidden" });
  group_card.image(Utils.getFileFromName(name[0])).size(80, 80).move(160, 145);
  group_card
    .text(name[0])
    .x(200)
    .y(230)
    .attr("startOffset", "50%")
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", "0.75em");
  const blurb = group_card.foreignObject(180, 95).attr({ x: 110, y: 255 });
  // blurb.add(
  //   SVG(
  //     '<div xmlns="http://www.w3.org/1999/xhtml" class="iwr-vis-group-card-html">' +
  //       name[3] +
  //       "</div>",
  //     true
  //   )
  // );
}

function addSettings(svg) {
  const line_colour = "#777777";
  const bg_colour = "#ffffff";
  const width = 100;
  const height = 60;
  const padding = 4;
  const radius = 2;
  const settings = svg.group().addClass("iwr-vis-settings-menu");
  // button
  const settings_button = settings
    .group()
    .addClass("iwr-vis-settings-menu-button");
  settings_button
    .rect(16, 16)
    .radius(radius)
    .stroke(line_colour)
    .fill(bg_colour);
  settings_button.line(4, 12, 12, 12);
  settings_button.line(4, 8, 12, 8);
  settings_button.line(4, 4, 12, 4);
  settings_button.stroke(line_colour).fill("none");
  settings_button.move(400 - 16 - padding, padding);
  // menu
  const settings_menu = settings
    .group()
    .addClass("iwr-vis-settings-menu-large");
  settings_menu
    .rect(width, height)
    .radius(radius)
    .stroke(line_colour)
    .fill(bg_colour);
  // group sorting options
  settings_menu
    .text("Sort by")
    .x(6)
    .y(0)
    .attr("font-size", "0.5em")
    .fill(line_colour);
  const sort_by_group = settings_menu.group();
  sort_by_group
    .rect(8, 8)
    .radius(1)
    .stroke(line_colour)
    .fill(bg_colour)
    .move(12, 24)
    .addClass("iwr-vis-settings-menu-sort-by-group");
  sort_by_group
    .text("group name")
    .x(24)
    .y(16)
    .attr("font-size", "0.5em")
    .fill(line_colour);
  const sort_by_prof = settings_menu.group();
  sort_by_prof
    .rect(8, 8)
    .radius(1)
    .stroke(line_colour)
    .fill(line_colour)
    .move(12, 24 + 12)
    .addClass("iwr-vis-settings-menu-sort-by-prof");
  sort_by_prof
    .text("professor name")
    .x(24)
    .y(28)
    .attr("font-size", "0.5em")
    .fill(line_colour);
  settings_menu.transform({
    translateX: 400 - width - padding,
    translateY: padding,
  });
  settings_menu.hide();
}

export const createSvgFile = function () {
  const svg = SVG(document.documentElement).size(400, 400) as SVG.Container;
  // background
  const bg_group = svg.group().addClass("iwr-vis-bg");
  bg_group.rect(400, 400).cx(200).cy(200).fill("#ffffff").stroke("#ffffff");

  const inner_circle = svg
    .circle(316)
    .cx(200)
    .cy(200)
    .fill("none")
    .stroke("none");

  // groups
  const groups = svg.group();
  groups.clipWith(inner_circle);
  addGroups(
    groups,
    Data.group_names,
    Data.method_weights,
    Data.application_weights,
    Data.group_colour
  );
  // methods
  addSegments(
    svg,
    "METHODS",
    Data.method_names,
    Utils.transpose(Data.method_weights),
    Data.method_color,
    168,
    10,
    "iwr-vis-method-item"
  );
  // applications
  addSegments(
    svg,
    "APPLICATIONS",
    Data.application_names,
    Utils.transpose(Data.application_weights),
    Data.application_color,
    188,
    10,
    "iwr-vis-application-item"
  );
  // settings menu
  addSettings(svg);

  return svg.svg();
};

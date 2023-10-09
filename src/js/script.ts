// @ts-nocheck

import { SVG } from "@svgdotjs/svg.js"; // eslint-disable-line
import "@svgdotjs/svg.filter.js"; // eslint-disable-line
import * as Utils from "./utils";

const json_data_url = "fileadmin/templates/iwr_vis/data.json";

let sorted_group_indices = [];

const method_anim_ms = 1000;

let show_groups = false;
let sort_by_group = false;

const updateSegments = function () {
  for (const group_card of SVG("#iwr-vis-menu-svg").find(
    ".iwr-vis-group-card",
  )) {
    group_card.css({ opacity: "0", visibility: "hidden" });
  }
  for (const group_item of SVG("#iwr-vis-menu-svg").find(
    ".iwr-vis-group-item",
  )) {
    group_item.show();
  }
  const segments = SVG("#iwr-vis-menu-svg").find(".iwr-vis-segment-item");
  for (const segment of segments) {
    if (segment.hasClass("selected")) {
      segment.css({ opacity: "1", filter: "grayscale(0)" });
      segment.findOne(".iwr-vis-segment-item-text").attr("fill", "#ffffff");
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0.5);
    } else if (segment.hasClass("hovered")) {
      segment.css({ opacity: "1", filter: "grayscale(0)" });
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0);
      segment.findOne(".iwr-vis-segment-item-text").attr("fill", "#000000");
    } else {
      segment.css({
        filter: "grayscale(80%)",
        opacity: "20%",
      });
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0);
      segment.findOne(".iwr-vis-segment-item-text").attr("fill", "#000000");
    }
  }
};

function updateGroups(
  groups: List<Element>,
  show_all = false,
  zoom = 1,
  cx = 200,
  cy = 200,
) {
  updateSegments();
  const items = SVG("#iwr-vis-menu-svg").find(".iwr-vis-group-item");
  if (groups != null) {
    console.assert(items.length === groups.length, items, groups);
  }
  let groupBoxIndex = { x: 0, y: 0 };
  let nGroups = 0;
  if (groups == null || show_all === true) {
    nGroups = items.length;
  } else {
    for (let k = 0; k < items.length; k++) {
      if (groups[k] != 0) {
        ++nGroups;
      }
    }
  }
  if (show_groups === true) {
    items.find(".iwr-vis-group-item-groupname").show();
    items.find(".iwr-vis-group-item-profname-small").show();
    items.find(".iwr-vis-group-item-profname-large").hide();
  }
  let ncols = 2;
  let scaleFactor = 0.43 * zoom;
  if (nGroups > 12) {
    ncols = 3;
  }
  let nrows = Math.floor((nGroups + (ncols - 1)) / ncols);
  if (nGroups > 21) {
    ncols = 4;
    groupBoxIndex.x = 1;
    nrows = Math.floor((nGroups + 10 + (ncols - 1)) / ncols);
    scaleFactor = (4.3 / nrows) * zoom;
    if (show_groups === true) {
      items.find(".iwr-vis-group-item-groupname").hide();
      items.find(".iwr-vis-group-item-profname-small").hide();
      items.find(".iwr-vis-group-item-profname-large").show();
    }
  }
  const width = 200 * scaleFactor;
  const height = 60 * scaleFactor;
  const x0 = cx - (width * ncols) / 2;
  const y0 = cy - (height * nrows) / 2;
  for (let i0 = 0; i0 < items.length; i0++) {
    let i = i0;
    if (sort_by_group) {
      i = sorted_group_indices[i0];
    }
    if (groups != null && show_all === false && groups[i] === 0) {
      items[i].css({ opacity: 0, visibility: "hidden" });
    } else {
      let opac = 1;
      if (groups != null) {
        opac = groups[i] + 0.2;
      }
      const padding = 0.8;
      items[i].animate(method_anim_ms, 0, "now").transform({
        scaleX: (width - padding) / items[i].width(),
        scaleY: (height - padding) / items[i].height(),
        positionX: x0 + width * (groupBoxIndex.x + 0.5),
        positionY: y0 + height * (groupBoxIndex.y + 0.5),
      });
      items[i].css({ opacity: opac, visibility: "visible" });
      groupBoxIndex = Utils.nextGroupBoxIndex(groupBoxIndex, ncols, nrows);
    }
  }
}

const resetAll = function () {
  SVG("#iwr-vis-menu-svg")
    .find(".iwr-vis-segment-item")
    .addClass("hovered")
    .removeClass("selected");
  updateGroups(null);
};

const selectSegment = function () {
  const segments = SVG("#iwr-vis-menu-svg").find(".iwr-vis-segment-item");
  const nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (this.hasClass("selected") && nSelected === 1) {
    resetAll();
  } else {
    segments.removeClass("hovered");
    segments.removeClass("selected");
    this.addClass("selected");
    updateGroups(this.data("groups"));
  }
};

const hoverSegment = function () {
  const segments = SVG("#iwr-vis-menu-svg").find(".iwr-vis-segment-item");
  const nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected != 1) {
    segments.removeClass("selected").removeClass("hovered");
    this.addClass("hovered");
    updateGroups(this.data("groups"), true);
  }
  if (!this.hasClass("selected")) {
    this.findOne(".iwr-vis-segment-item-text").fill("#ffffff");
    this.findOne(".iwr-vis-segment-item-arc").attr({ "stroke-width": 0.5 });
  }
};

const leaveSegment = function () {
  if (!this.hasClass("selected")) {
    this.findOne(".iwr-vis-segment-item-text").fill("#000000");
    this.findOne(".iwr-vis-segment-item-arc").attr({ "stroke-width": 0 });
  }
  const segments = SVG("#iwr-vis-menu-svg").find(".iwr-vis-segment-item");
  const nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected === 1) {
    return;
  }
  segments.addClass("hovered");
  updateGroups(null);
};

function applyWeightedHighlights(items, weights) {
  console.assert(items.length === weights.length, items, weights);
  items.css({ filter: "grayscale(80%)", opacity: "20%" });
  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > 0) {
      items[i].css({ filter: "grayscale(0)" });
      items[i].css({ opacity: weights[i] });
    }
  }
}

const highlightSegments = function () {
  applyWeightedHighlights(
    SVG("#iwr-vis-menu-svg").find(".iwr-vis-method-item"),
    this.data("method_weights"),
  );
  applyWeightedHighlights(
    SVG("#iwr-vis-menu-svg").find(".iwr-vis-application-item"),
    this.data("application_weights"),
  );
};

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
  segmentClass,
) {
  const delta = 360 / (names.length + 1);
  for (let i = 0; i < names.length; i++) {
    const group = svg
      .group()
      .addClass("iwr-vis-segment-item")
      .addClass(segmentClass)
      .addClass("highlighted");
    group.click(selectSegment);
    group.on("mouseenter", hoverSegment);
    group.on("mouseleave", leaveSegment);
    group.data("text", names[i]);
    group.data("groups", groups[i]);
    group.css({
      "transition-property": "opacity",
      "transition-duration": "0.6s",
    });
    group
      .path(
        Utils.makeSegment(radius, (i + 0.5) * delta, (i + 1.5) * delta, width),
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
      .attr("font-size", "8.8px");
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
    .attr("font-size", "10.56px")
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
        delta / 2 - arrowPadding,
      ),
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
        -delta / 2 + arrowPadding,
      ),
    )
    .fill("none")
    .stroke(color)
    .attr({ "stroke-width": 2 })
    .marker("end", arrow);
}

function addGroups(
  svg,
  members,
  method_weights,
  application_weights,
  color,
  image_base_url,
) {
  const boxHeight = 60;
  const boxWidth = 200;
  const padding = 2;
  for (let i = 0; i < members.length; i++) {
    const groupContainer = svg.group();
    const group = groupContainer.group().addClass("iwr-vis-group-item");
    group.on("mouseenter", highlightSegments);
    group.on("mouseclick", highlightSegments);
    group.on("mouseleave", function () {
      if (!this.hasClass("frozenSegments")) {
        updateSegments();
      }
      return;
    });
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    group.css({
      transition: "opacity 0.6s, visibility 0.6s",
    });
    group.click(function () {
      this.addClass("frozenSegments");
      SVG("#iwr-vis-menu-svg").find(".iwr-vis-group-item").hide();
      this.parent()
        .findOne(".iwr-vis-group-card")
        .front()
        .css({ opacity: 1, visibility: "visible" });
    });
    // box
    group
      .rect(boxWidth, boxHeight)
      .fill(color)
      .stroke("none")
      .addClass("iwr-vis-group-item-box")
      .filterWith(shadowFilter);
    if (show_groups === true) {
      // group name
      const numLines = countLines(members[i].group);
      let txtTop = 0;
      const dy = 11;
      if (numLines === 1) {
        txtTop = 10;
      } else if (numLines === 2) {
        txtTop = 4;
      }
      for (const textLine of members[i].group.split("\n")) {
        group
          .text(textLine)
          .addClass("iwr-vis-group-item-groupname")
          .x(boxWidth / 2)
          .y(txtTop)
          .attr("startOffset", "50%")
          .attr("text-anchor", "middle")
          .fill("#0000ff")
          .attr("font-weight", "bold")
          .attr("font-size", "12px")
          .hide();
        txtTop += dy;
      }
      // small professor name
      group
        .text(Utils.shortenName(members[i].name, false))
        .x(boxWidth / 2)
        .y(txtTop + padding + 6 / numLines)
        .addClass("iwr-vis-group-item-profname-small")
        .attr("startOffset", "50%")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "12px")
        .hide();
    }
    // large professor name
    let dy = 0;
    for (const textLine of Utils.shortenName(members[i].name, true).split(
      "\n",
    )) {
      group
        .text(textLine)
        .y(10 + dy)
        .x(boxWidth / 2)
        .addClass("iwr-vis-group-item-profname-large")
        .attr("startOffset", "50%")
        .attr("text-anchor", "middle")
        .attr("font-size", "20px");
      dy += 25;
    }
    group.size(65, 20);
    group.move(200 - 65 / 2, 200 - 20 / 2);
    addGroupCard(groupContainer, members[i], color, image_base_url);
  }
}

const hideGroupCard = function () {
  const card = this.parent();
  card.parent().findOne(".iwr-vis-group-item").removeClass("frozenSegments");
  card.css({ opacity: 0, visibility: "hidden" });
  SVG("#iwr-vis-menu-svg").find(".iwr-vis-group-item").show();
};

function addGroupCard(svg, member, color, image_base_url) {
  const group_card = svg.group().addClass("iwr-vis-group-card");
  const card_size = 210;
  const bg_circle = group_card
    .circle(316)
    .cx(200)
    .cy(200)
    .fill("#ffffff")
    .stroke("none");
  group_card
    .rect(card_size, card_size)
    .cx(200)
    .cy(200)
    .fill(color)
    .stroke("none")
    .filterWith(shadowFilter);
  const close_button_size = 6;
  const close_button_padding = 3;
  const close_button_x =
    200 + card_size / 2 - close_button_size - close_button_padding;
  const close_button_y = 200 - card_size / 2 + close_button_padding;
  const close_button = group_card.group().addClass("iwr-vis-clickable");
  close_button
    .rect(close_button_size, close_button_size)
    .move(close_button_x, close_button_y)
    .stroke("#ffffff")
    .fill("#ffffff");
  close_button
    .line(
      close_button_x,
      close_button_y,
      close_button_x + close_button_size,
      close_button_y + close_button_size,
    )
    .stroke("#777777")
    .attr({ "stroke-width": 0.5 });
  close_button
    .line(
      close_button_x + close_button_size,
      close_button_y,
      close_button_x,
      close_button_y + close_button_size,
    )
    .stroke("#777777")
    .attr({ "stroke-width": 0.5 });
  bg_circle.click(hideGroupCard);
  close_button.click(hideGroupCard);
  let y = 99;
  for (const textLine of member.group.split("\n")) {
    group_card
      .text(textLine)
      .x(200)
      .y(y)
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle")
      .fill("#0000ff")
      .attr("font-weight", "bold")
      .attr("font-size", "12px")
      .linkTo(member.website);
    y += 13;
  }
  group_card.css({ opacity: 0, visibility: "hidden" });
  y += 10;
  group_card
    .image(image_base_url + member.image)
    .size(80, 80)
    .move(160, y)
    .linkTo(member.website);
  y += 84;
  group_card
    .text(member.name)
    .x(200)
    .y(y)
    .attr("startOffset", "50%")
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", "12px");
  y += 25;
  const blurb = group_card.foreignObject(180, 95).attr({ x: 110, y: y });
  blurb.add(
    SVG(
      '<div xmlns="http://www.w3.org/1999/xhtml" class="iwr-vis-group-card-html">' +
        member.description +
        "</div>",
      true,
    ),
  );
}

const zoomGroups = function (e) {
  // only zoom in/out if all groups are displayed
  const segments = SVG("#iwr-vis-menu-svg").find(".iwr-vis-segment-item");
  const nHovered = segments.hasClass("hovered").filter(Boolean).length;
  if (nHovered != segments.length) {
    return;
  }
  const p = this.point(e.clientX, e.clientY);
  const z = 2;
  if (e.deltaY < 0) {
    updateGroups(
      null,
      true,
      z,
      200 + (1 - z) * (p.x - 200),
      200 + (1 - z) * (p.y - 200),
    );
  } else {
    updateGroups(null, true, 1, 200, 200);
  }
};

const sortGroupsByProf = function () {
  const group = SVG("#iwr-vis-menu-svg").find(
    ".iwr-vis-settings-menu-sort-by-group",
  );
  const prof = SVG("#iwr-vis-menu-svg").find(
    ".iwr-vis-settings-menu-sort-by-prof",
  );
  if (this.findOne(".iwr-vis-settings-menu-sort-by-prof") != null) {
    prof.fill("#777777");
    group.fill("#ffffff");
    sort_by_group = false;
  } else {
    group.fill("#777777");
    prof.fill("#ffffff");
    sort_by_group = true;
  }
  resetAll();
};

function addSettings(svg) {
  const line_color = "#777777";
  const bg_color = "#ffffff";
  const width = 100;
  const height = 60;
  const padding = 4;
  const radius = 2;
  const settings = svg.group().addClass("iwr-vis-settings-menu");
  settings.on("mouseenter", function () {
    this.findOne(".iwr-vis-settings-menu-large").show();
  });
  settings.on("mouseleave", function () {
    this.findOne(".iwr-vis-settings-menu-large").hide();
  });
  // button
  const settings_button = settings
    .group()
    .addClass("iwr-vis-settings-menu-button");
  settings_button
    .rect(16, 16)
    .radius(radius)
    .stroke(line_color)
    .fill(bg_color)
    .attr({ "stroke-width": 0.5 });
  settings_button.line(4, 12, 12, 12).attr({ "stroke-width": 0.5 });
  settings_button.line(4, 8, 12, 8).attr({ "stroke-width": 0.5 });
  settings_button.line(4, 4, 12, 4).attr({ "stroke-width": 0.5 });
  settings_button.stroke(line_color).fill("none").attr({ "stroke-width": 0.5 });
  settings_button.move(400 - 16 - padding, padding);
  // menu
  const settings_menu = settings
    .group()
    .addClass("iwr-vis-settings-menu-large");
  settings_menu
    .rect(width, height)
    .radius(radius)
    .stroke(line_color)
    .fill(bg_color)
    .attr({ "stroke-width": 0.5 });
  // group sorting options
  settings_menu
    .text("Sort by")
    .x(6)
    .y(0)
    .attr("font-size", "8px")
    .fill(line_color);
  const sort_by_group = settings_menu.group().addClass("iwr-vis-clickable");
  sort_by_group
    .rect(8, 8)
    .radius(1)
    .stroke(line_color)
    .fill(bg_color)
    .move(12, 24)
    .attr({ "stroke-width": 0.5 })
    .addClass("iwr-vis-settings-menu-sort-by-group");
  sort_by_group
    .text("group name")
    .x(24)
    .y(16)
    .attr("font-size", "8px")
    .fill(line_color);
  sort_by_group.click(sortGroupsByProf);
  const sort_by_prof = settings_menu.group().addClass("iwr-vis-clickable");
  sort_by_prof
    .rect(8, 8)
    .radius(1)
    .stroke(line_color)
    .fill(line_color)
    .move(12, 24 + 12)
    .attr({ "stroke-width": 0.5 })
    .addClass("iwr-vis-settings-menu-sort-by-prof");
  sort_by_prof
    .text("professor name")
    .x(24)
    .y(28)
    .attr("font-size", "8px")
    .fill(line_color);
  sort_by_prof.click(sortGroupsByProf);
  settings_menu.transform({
    translateX: 400 - width - padding,
    translateY: padding,
  });
  settings_menu.hide();
}

function create_iwr_vis(data) {
  sorted_group_indices = Utils.sorted_indices(data.members, "group");
  show_groups = data.show_groups;
  const svg = SVG("#iwr-vis-menu-svg") as SVG.Container;
  // background
  const bg_group = svg.group().addClass("iwr-vis-bg");
  bg_group.click(resetAll);
  bg_group.rect(400, 400).cx(200).cy(200).fill("#ffffff").stroke("#ffffff");

  const inner_circle = svg
    .circle(316)
    .cx(200)
    .cy(200)
    .fill("none")
    .stroke("none");
  svg.on("wheel", zoomGroups);

  // create array of weights from member data
  const method_weights = [];
  const application_weights = [];
  for (const member of data.members) {
    method_weights.push(member.method_weights);
    application_weights.push(member.application_weights);
  }

  // groups
  const groups = svg.group();
  groups.clipWith(inner_circle);
  addGroups(
    groups,
    data.members,
    method_weights,
    application_weights,
    data.group_color,
    data.image_base_url,
  );
  // methods
  addSegments(
    svg,
    "METHODS",
    data.methods,
    Utils.transpose(method_weights),
    data.method_color,
    168,
    10,
    "iwr-vis-method-item",
  );
  // applications
  addSegments(
    svg,
    "APPLICATIONS",
    data.applications,
    Utils.transpose(application_weights),
    data.application_color,
    188,
    10,
    "iwr-vis-application-item",
  );
  resetAll();
  // settings menu
  addSettings(svg);
}

window.onload = function () {
  fetch(json_data_url, { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => create_iwr_vis(data));
};

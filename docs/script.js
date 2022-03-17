// groups
var group_names = ["group1", "group2", "group3"];
var application_weights = [
  [0, 1, 1, 0],
  [0, 0.8, 0, 0.7],
  [1, 0, 0, 0],
];
var method_weights = [
  [0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

// methods
var method_names = [
  "Mathematical and Numerical Analysis",
  "Numerical Algorithms and Software",
  "Data Analysis and Graphics",
  "Machine Learning and Computer Vision",
  "Arithmetic, Geometry and Topology",
];
var method_colors = ["#ee0000", "#ee3333", "#ee6666", "#bb3333", "#990000"];
var method_groups = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 1],
];

// applications
var application_names = ["Healthcare", "Science", "Humanities", "Weather"];
var application_colors = ["#bb0000", "#aa2222", "#880000", "#550000"];
var application_groups = [
  [0, 0, 1],
  [1, 1, 0],
  [1, 0, 0],
  [0, 1, 0],
];

// svg circle arc math based on https://stackoverflow.com/a/18473154/6465472
function xy(radius, deg) {
  var rad = ((deg - 90) * Math.PI) / 180.0;
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

// svg path for text inside a segment (single arc)
function makeTextArc(radius, startAngle, endAngle, width) {
  var anticlockwise = startAngle > 70 && endAngle < 290;
  if (anticlockwise) {
    radius = radius + Math.floor(width / 2) - 1;
  } else {
    radius = radius - Math.floor(width / 2);
  }
  var p0 = xy(radius, startAngle);
  var p1 = xy(radius, endAngle);
  if (anticlockwise) {
    return ["M", p1.x, p1.y, "A", radius, radius, 0, 0, 0, p0.x, p0.y].join(
      " "
    );
  }
  return ["M", p0.x, p0.y, "A", radius, radius, 0, 0, 1, p1.x, p1.y].join(" ");
}

// svg path for a segment (two arcs connected by straight lines)
function makeSegment(radius, startAngle, endAngle, width) {
  var rm = radius - width;
  var rp = radius + width;
  var p0 = xy(rm, startAngle);
  var p1 = xy(rm, endAngle);
  var p2 = xy(rp, endAngle);
  var p3 = xy(rp, startAngle);
  return [
    "M",
    p0.x,
    p0.y,
    "A",
    rm,
    rm,
    0,
    0,
    1,
    p1.x,
    p1.y,
    "L",
    p2.x,
    p2.y,
    "A",
    rp,
    rp,
    0,
    0,
    0,
    p3.x,
    p3.y,
    "z",
  ].join(" ");
}

/*global SVG*/

var updateSegments = function () {
  var segments = SVG.find(".iwr-vis-segment-item");
  for (var i = 0; i < segments.length; i++) {
    if (segments[i].hasClass("selected")) {
      segments[i].css({ opacity: 1, filter: "grayscale(0)" });
      segments[i].animate().attr("stroke-width", 2);
    } else if (segments[i].hasClass("hovered")) {
      segments[i].css({ opacity: 1, filter: "grayscale(0)" });
      segments[i].attr("stroke-width", 1);
    } else {
      segments[i].css({
        filter: "grayscale(80%)",
        opacity: "20%",
      });
      segments[i].attr("stroke-width", 1);
    }
  }
};

function updateGroups(groups) {
  updateSegments();
  var items = SVG.find(".iwr-vis-group-item");
  if (typeof groups === "undefined") {
    items.css({ opacity: 1, visibility: "visible" });
    return;
  }
  for (var i = 0; i < groups.length; i++) {
    if (groups[i] == 0) {
      items[i].css({ opacity: 0, visibility: "hidden" });
    } else {
      items[i].css({ opacity: 1, visibility: "visible" });
    }
  }
}

var resetAll = function () {
  SVG.find(".iwr-vis-segment-item").addClass("hovered").removeClass("selected");
  updateGroups();
};

var selectSegment = function () {
  var segments = SVG.find(".iwr-vis-segment-item");
  var nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (this.hasClass("selected") && nSelected == 1) {
    resetAll();
  } else {
    segments.removeClass("hovered");
    segments.removeClass("selected");
    this.addClass("selected");
    updateGroups(this.data("groups"));
  }
};

var hoverSegment = function () {
  var segments = SVG.find(".iwr-vis-segment-item");
  var nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected == 1) {
    return;
  }
  segments.removeClass("selected").removeClass("hovered");
  this.addClass("hovered");
  updateGroups(this.data("groups"));
};

var leaveSegment = function () {
  var segments = SVG.find(".iwr-vis-segment-item");
  var nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected == 1) {
    return;
  }
  segments.addClass("hovered");
  updateGroups();
};

function applyWeightedHighlights(items, weights) {
  items.css({ filter: "grayscale(80%)", opacity: "20%" });
  for (var i = 0; i < weights.length; i++) {
    if (weights[i] > 0) {
      items[i].css({ filter: "grayscale(0)" });
      items[i].css({ opacity: weights[i] });
    }
  }
}

var highlightSegments = function () {
  applyWeightedHighlights(
    SVG.find(".iwr-vis-method-item"),
    this.data("method_weights")
  );
  applyWeightedHighlights(
    SVG.find(".iwr-vis-application-item"),
    this.data("application_weights")
  );
};

function addSegments(svg, names, groups, colors, radius, width, segmentClass) {
  var delta = 360 / names.length;
  for (var i = 0; i < names.length; i++) {
    var group = svg
      .group()
      .addClass("iwr-vis-segment-item")
      .addClass(segmentClass)
      .addClass("highlighted");
    group.click(selectSegment);
    group.mouseover(hoverSegment);
    group.mouseout(leaveSegment);
    group.data("text", names[i]);
    group.data("groups", groups[i]);
    group.css({
      "transition-property": "opacity",
      "transition-duration": "0.6s",
    });
    group
      .path(makeSegment(radius, i * delta, (i + 1) * delta, width))
      .fill(colors[i])
      .stroke("#000000")
      .css({ filter: "drop-shadow(1px 1px 2px)" });
    var strPath = group
      .path(makeTextArc(radius, i * delta, (i + 1) * delta, width))
      .fill("none")
      .stroke("none");
    strPath
      .text(names[i])
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle");
  }
}

window.onload = function () {
  var svg = SVG("#iwr-vis-menu-svg");
  // background
  var bg_group = svg.group().addClass("iwr-vis-bg");
  bg_group.click(resetAll);
  bg_group.rect(400, 400).cx(200).cy(200).fill("#ffffff").stroke("#ffffff");

  // groups
  var h = 150 / group_names.length;
  for (var i = 0; i < group_names.length; i++) {
    var group = svg.group().addClass("iwr-vis-group-item");
    group.mouseover(highlightSegments);
    group.mouseout(updateSegments);
    group.data("text", group_names[i]);
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    group.css({ transition: "opacity 0.6s, visibility 0.6s" });
    group
      .rect(160, h)
      .cx(200)
      .cy(145 + h * i)
      .fill("#cccccc")
      .stroke("#000000")
      .css({ filter: "drop-shadow(1px 1px 2px)" });
    group
      .text(group_names[i])
      .cx(200)
      .cy(145 + h * i);
  }
  // methods
  addSegments(
    svg,
    method_names,
    method_groups,
    method_colors,
    157,
    13,
    "iwr-vis-method-item"
  );
  // applications
  addSegments(
    svg,
    application_names,
    application_groups,
    application_colors,
    183,
    13,
    "iwr-vis-application-item"
  );
  // iwr logo: animate dot colors
  for (i = 1; i < 7; ++i) {
    SVG("#iwr-logo-dot" + i)
      .animate({
        duration: 800,
        delay: 500 * i,
        swing: i < 6,
        times: 2 - Math.floor(i / 6),
        wait: 300,
      })
      .attr({ fill: "#a1131b" });
  }
};

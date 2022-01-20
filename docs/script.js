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
  "Numbers",
  "Counting",
  "Computing",
  "Guessing",
  "Optimizing",
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
function makeArc(radius, startAngle, endAngle) {
  var p0 = xy(radius, startAngle);
  var p1 = xy(radius, endAngle);
  return ["M", p0.x, p0.y, "A", rm, rm, 0, 0, 1, p1.x, p1.y].join(" ");
}

// svg path for a segment (two arcs connected by straight lines)
function makeSegment(radius, startAngle, endAngle, width) {
  rm = radius - width;
  rp = radius + width;
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

var resetGroups = function () {
  SVG.find(".iwr-vis-segment-item").css({ opacity: 1, filter: "grayscale(0)" });
  SVG.find(".iwr-vis-group-item").show();
};

var showGroups = function () {
  SVG.find(".iwr-vis-segment-item").css({
    filter: "grayscale(80%)",
    opacity: "20%",
  });
  this.css({ opacity: 1, filter: "grayscale(0)" });
  var groups = this.data("groups");
  var items = SVG.find(".iwr-vis-group-item");
  for (var i = 0; i < groups.length; i++) {
    if (groups[i] == 0) {
      items[i].hide();
    } else {
      items[i].show();
    }
  }
};

var resetHighlights = function () {
  SVG.find(".iwr-vis-segment-item").css({ opacity: 1, filter: "grayscale(0)" });
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

var weightHighlights = function () {
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
      .addClass(segmentClass);
    group.mouseover(showGroups);
    group.mouseout(resetGroups);
    group.data("text", names[i]);
    group.data("groups", groups[i]);
    var itemPath = group
      .path(makeSegment(radius, i * delta, (i + 1) * delta, width))
      .fill(colors[i])
      .stroke("#000000")
      .css({ filter: "drop-shadow(1px 1px 2px)" });
    var strPath = group
      .path(makeArc(radius - Math.ceil(width / 2), i * delta, (i + 1) * delta))
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
  // groups
  var h = 150 / group_names.length;
  for (var i = 0; i < group_names.length; i++) {
    var group = svg.group().addClass("iwr-vis-group-item");
    group.mouseover(weightHighlights);
    group.mouseout(resetHighlights);
    group.data("text", group_names[i]);
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    var rect = group
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

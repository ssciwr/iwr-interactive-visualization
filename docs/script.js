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

window.onload = function () {
  var s = SVG("#svg-menu");

  var resetGroups = function () {
    SVG.find(".method-item").css({ opacity: 1, filter: "grayscale(0)" });
    SVG.find(".application-item").css({ opacity: 1, filter: "grayscale(0)" });
    SVG.find(".group-item").show();
  };

  var showGroups = function () {
    SVG.find(".method-item").css({ filter: "grayscale(80%)", opacity: "20%" });
    SVG.find(".application-item").css({
      filter: "grayscale(80%)",
      opacity: "20%",
    });
    this.css({ opacity: 1, filter: "grayscale(0)" });
    var groups = this.data("groups");
    var items = SVG.find(".group-item");
    for (var i = 0; i < groups.length; i++) {
      if (groups[i] == 0) {
        items[i].hide();
      } else {
        items[i].show();
      }
    }
  };

  var resetHighlights = function () {
    SVG.find(".method-item").css({ opacity: 1, filter: "grayscale(0)" });
    SVG.find(".application-item").css({ opacity: 1, filter: "grayscale(0)" });
  };

  var weightHighlights = function () {
    var weights = this.data("method_weights");
    var items = SVG.find(".method-item");
    items.css({ filter: "grayscale(80%)", opacity: "20%" });
    for (var i = 0; i < weights.length; i++) {
      if (weights[i] > 0) {
        items[i].css({ filter: "grayscale(0%)" });
        items[i].css({ opacity: weights[i] });
      }
    }
    var weights = this.data("application_weights");
    var items = SVG.find(".application-item");
    items.css({ filter: "grayscale(80%)", opacity: "20%" });
    for (var i = 0; i < weights.length; i++) {
      if (weights[i] > 0) {
        items[i].css({ filter: "grayscale(0%)" });
        items[i].css({ opacity: weights[i] });
      }
    }
  };

  // groups
  var h = 150 / group_names.length;
  for (var i = 0; i < group_names.length; i++) {
    var group = s.group().addClass("group-item");
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
      .stroke("#000000");
    group
      .text(group_names[i])
      .cx(200)
      .cy(145 + h * i);
  }

  // methods
  var r = 157;
  var delta = 360 / method_names.length;
  for (var i = 0; i < method_names.length; i++) {
    var group = s.group().addClass("method-item");
    group.mouseover(showGroups);
    group.mouseout(resetGroups);
    group.data("text", method_names[i]);
    group.data("groups", method_groups[i]);
    var itemPath = group
      .path(makeSegment(r, i * delta, (i + 1) * delta, 13))
      .fill(method_colors[i])
      .stroke("#000000");
    var strPath = group
      .path(makeArc(r - 7, i * delta, (i + 1) * delta))
      .fill("none")
      .stroke("none");
    strPath
      .text(method_names[i])
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle");
  }

  // applications
  var r = 183;
  var delta = 360 / application_names.length;
  for (var i = 0; i < application_names.length; i++) {
    var group = s.group().addClass("application-item");
    group.data("text", application_names[i]);
    group.data("groups", application_groups[i]);
    group.mouseover(showGroups);
    group.mouseout(resetGroups);
    var itemPath = group
      .path(makeSegment(r, i * delta, (i + 1) * delta, 13))
      .fill(application_colors[i])
      .stroke("#000000");
    var strPath = group
      .path(makeArc(r - 8, i * delta, (i + 1) * delta))
      .fill("none")
      .stroke("none");
    strPath
      .text(application_names[i])
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle");
  }
};

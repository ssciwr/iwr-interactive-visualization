// groups: [professor name, group name, webpage]
var group_names = [
  [
    "Prof Peter Albers",
    "Symplectic Dynamics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Artur Andrzejak",
    "Parallel and\nDistributed Systems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Peter Bastian",
    "Parallel Computing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Hans Georg Bock",
    "Simulation and Optimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Gebhard Böckle",
    "Computational Arithmetic\nGeometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof André Butz",
    "Atmospheric Physics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Peter Comba",
    "Theory and Modeling in Inorganic\nand Bioinorganic Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Andreas Dreuw",
    "Theoretical and Computational\nChemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Stefan Fischer",
    "Computational Biochemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Anette Frank",
    "Natural Language\nProcessing Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Frauke Gräter",
    "Molecular Biomechanics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Frederik Graw",
    "Modelling Infection & Immunity",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr Ganna Gryn'ova",
    "Computational Carbon Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Eva Gutheil",
    "Multiphase Flows\nand Combustion",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Roland Herzog",
    "Scientific Computing\nand Optimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Jürgen Hesser",
    "Data Analysis and Modeling\nin Medicine",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Vincent Heuveline",
    "Engineering Mathematics and\nComputing Lab (EMCL)",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "PD Dr Ahmad Hujeirat",
    "Theoretical and Computational\nAstrophysics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Bernhard Höfle",
    "3DGeo – 3D Geospatial\nData Processing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Jan Johannes",
    "Statistics of Inverse Problems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Bernd Jähne",
    "Air-Sea Interactions",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Guido Kanschat",
    "Mathematical Methods\nof Simulation",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ralf Klessen",
    "Theoretical Star\nFormation Studies",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Hans Knüpfer",
    "Applied Analysis\n(CV/PDE)",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ekaterina Kostina",
    "Numerical Optimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  ["Prof Kurt Kremer", "Polymer Theory", "https://typo.iwr.uni-heidelberg.de/"],
  [
    "Dr Susanne Krömker",
    "Visualization and\nNumerical Geometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ursula Kummer",
    "Modeling of\nBiological Processes",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Anna Marciniak-Czochra",
    "Applied Analysis and\nModelling in Biosciences",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Björn Ommer",
    "Computer Vision",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Barbara Paech",
    "Software Engineering",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Jun Prof Maria Beatrice Pozzetti",
    "Geometric Group Theory",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ralf Rannacher",
    "Numerical Methods",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Stefan Riezler",
    "Statistical Natural Language\nProcessing Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Joacim Rocklöv",
    "Artificial Intelligence in the\nResearch of Infectious Diseases\nImpacted by Climate Change",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Kurt Roth",
    "Terrestrial Systems & Chaotic,\nComplex, and Evolving\nEnvironmental Systems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Carsten Rother",
    "Computer Vision\nand Learning Lab",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Filip Sadlo",
    "Visual Computing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Robert Scheichl",
    "Numerical Analysis and\nUncertainty Quantification",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Christoph Schnörr",
    "Image and Pattern Analysis",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Ulrich Schwarz",
    "Physics of Complex Biosystems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Oriol Vendrell",
    "Theoretical Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Rebecca Wade",
    "Molecular and Cellular\nModeling Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Anna Wienhard",
    "Differential Geometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Jun Prof Jakob Zech",
    "Machine Learning",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof Alexander Zipf",
    "GIScience Research Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
];
var group_colour = "#ffffff";
var group_border_colour = "#ffffff";

// methods
var method_names = [
  "Mathematical and Numerical Analysis",
  "Numerical Algorithms and Software",
  "Data Analysis and Graphics",
  "Machine Learning and Computer Vision",
  "Arithmetic, Geometry and Topology",
];
var method_anim_ms = 1000;
var method_color = "#e13535";
var method_weights = [
  [1.0, 0.0, 1.0, 0.0, 1.0], //"Prof Peter Albers",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof Artur Andrzejak",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Peter Bastian",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Hans Georg Bock",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Prof Gebhard Böckle",
  [0.0, 1.0, 1.0, 0.0, 0.0], //"Prof André Butz",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Peter Comba",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Andreas Dreuw",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Dr Stefan Fischer",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof Anette Frank",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Frauke Gräter",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Dr Frederik Graw",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Dr Ganna Gryn'ova",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Eva Gutheil",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Roland Herzog",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Jürgen Hesser",
  [0.0, 1.0, 1.0, 0.0, 0.0], //"Prof Vincent Heuveline",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"PD Dr Ahmad Hujeirat",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Bernhard Höfle",
  [1.0, 0.0, 1.0, 0.0, 0.0], //"Prof Jan Johannes",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof Bernd Jähne",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Guido Kanschat",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Ralf Klessen",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Hans Knüpfer",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Ekaterina Kostina",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Kurt Kremer",
  [0.0, 0.0, 1.0, 0.0, 1.0], //"Dr Susanne Krömker",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Ursula Kummer",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Anna Marciniak-Czochra",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Björn Ommer",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Barbara Paech",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Jun Prof Maria Beatrice Pozzetti",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Rolf Rannacher",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Stefan Riezler",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Joacim Rocklöv",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Kurt Roth",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Carsten Rother",
  [0.0, 0.5, 1.0, 0.0, 1.0], //"Prof Filip Sadlo",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Robert Scheichl",
  [1.0, 0.0, 0.0, 1.0, 0.0], //"Prof Christoph Schnörr",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Ulrich Schwarz",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Oriol Vendrell",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Rebecca Wade",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Prof Anna Wienhard",
  [1.0, 0.0, 0.0, 1.0, 0.0], //"Jun Prof Jakob Zech",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Alexander Zipf",
];

// applications
var application_names = [
  "Molecular Material Science",
  "Medicine and Bioscience",
  "Humanities",
  "Astrophysics",
  "Environmental Sciences",
  "Engineering",
];
var application_color = "#499bce";
var application_weights = [
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Peter Albers",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Artur Andrzejak",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Peter Bastian",
  [0.0, 1.0, 0.0, 0.0, 0.0, 1.0], //"Prof Hans Georg Bock",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Gebhard Böckle",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof André Butz",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Peter Comba",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Andreas Dreuw",
  [1.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Dr Stefan Fischer",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Anette Frank",
  [1.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Frauke Gräter",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Dr Frederik Graw",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Dr Ganna Gryn'ova",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Eva Gutheil",
  [0.0, 0.0, 0.0, 0.0, 0.0, 1.0], //"Prof Roland Herzog",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Jürgen Hesser",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Vincent Heuveline",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"PD Dr Ahmad Hujeirat",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Bernhard Höfle",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Jan Johannes",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Bernd Jähne",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Guido Kanschat",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Prof Ralf Klessen",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Hans Knüpfer",
  [0.0, 1.0, 0.0, 0.0, 0.0, 1.0], //"Prof Ekaterina Kostina",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Kurt Kremer",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Dr Susanne Krömker",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Ursula Kummer",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Anna Marciniak-Czochra",
  [0.0, 1.0, 1.0, 0.0, 0.0, 0.0], //"Prof Björn Ommer",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Barbara Paech",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Jun Prof Maria Beatrice Pozzetti",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Rolf Rannacher",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Prof Stefan Riezler",
  [0.0, 1.0, 0.0, 0.0, 1.0, 0.0], //"Prof Joacim Rocklöv",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Kurt Roth",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Carsten Rother",
  [0.25, 0.5, 0.0, 0.5, 0.25, 0.5], //"Prof Filip Sadlo",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Robert Scheichl",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Christoph Schnörr",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Ulrich Schwarz",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Oriol Vendrell",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof Rebecca Wade",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof Anna Wienhard",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Jun Prof Jakob Zech",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof Alexander Zipf",
];

// https://stackoverflow.com/a/36164530/6465472
function transpose(m) {
  return m[0].map((x, i) => m.map((x) => x[i]));
}

var method_groups = transpose(method_weights);
var application_groups = transpose(application_weights);

// svg circle arc math based on https://stackoverflow.com/a/18473154/6465472
function xy(radius, deg) {
  var rad = ((deg - 90) * Math.PI) / 180.0;
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

// svg path for text inside a segment (single arc)
function makeTextArc(radius, startAngle, endAngle) {
  var anticlockwise = startAngle > 70 && endAngle < 290;
  if (!anticlockwise) {
    radius = radius - 1;
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

function makeArrowArc(radius, startAngle, endAngle) {
  var p0 = xy(radius, startAngle);
  var p1 = xy(radius, endAngle);
  var clockwise = 1;
  if (endAngle < startAngle) {
    clockwise = 0;
  }
  return [
    "M",
    p0.x,
    p0.y,
    "A",
    radius,
    radius,
    0,
    0,
    clockwise,
    p1.x,
    p1.y,
  ].join(" ");
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
      segments[i].animate().attr("stroke-width", 1);
    } else if (segments[i].hasClass("hovered")) {
      segments[i].css({ opacity: 1, filter: "grayscale(0)" });
      segments[i].attr("stroke-width", 0);
    } else {
      segments[i].css({
        filter: "grayscale(80%)",
        opacity: "20%",
      });
      segments[i].attr("stroke-width", 0);
    }
  }
};

function nextGroupBoxIndex(p, ncols, nrows = 0) {
  var x_max = ncols - 1;
  var x_min = 0;
  if (ncols == 4) {
    // first 2, last 3 have 2 columns
    if (p.y <= 1 || p.y >= nrows - 4) {
      x_max = 2;
      x_min = 1;
    }
    if (p.y == 1) {
      x_min = 0;
    }
    if (p.y == nrows - 4) {
      x_max = ncols - 1;
    }
  }
  if (p.x < x_max) {
    return { x: p.x + 1, y: p.y };
  }
  return { x: x_min, y: p.y + 1 };
}

function updateGroups(groups, zoom = 1, cx = 200, cy = 200) {
  updateSegments();
  var items = SVG.find(".iwr-vis-group-item");
  if (groups != null) {
    console.assert(items.length == groups.length, items, groups);
  }
  var groupBoxIndex = { x: 0, y: 0 };
  var nGroups = 0;
  if (groups == null) {
    nGroups = items.length;
  } else {
    for (var k = 0; k < items.length; k++) {
      if (groups[k] != 0) {
        ++nGroups;
      }
    }
  }
  var ncols = 2;
  var height = 30 * zoom;
  var width = 122 * zoom;
  if (nGroups > 12) {
    ncols = 3;
    height = 26 * zoom;
    width = 100 * zoom;
  }
  var nrows = Math.floor((nGroups + (ncols - 1)) / ncols);
  if (nGroups > 21) {
    ncols = 4;
    groupBoxIndex.x = 1;
    nrows = Math.floor((nGroups + 10 + (ncols - 1)) / ncols);
    width = 65 * zoom;
    height = (280 * zoom) / nrows;
  }
  var x0 = cx - (width * ncols) / 2;
  var y0 = cy - (height * nrows) / 2;
  for (var i = 0; i < items.length; i++) {
    if (groups != null && groups[i] == 0) {
      items[i].css({ opacity: 0, visibility: "hidden" });
    } else {
      var opac = 1;
      if (groups != null) {
        opac = groups[i];
      }
      items[i].animate(method_anim_ms, 0, "now").transform({
        scaleX: (width - 1) / items[i].width(),
        scaleY: (height - 1) / items[i].height(),
        positionX: x0 + width * (groupBoxIndex.x + 0.5),
        positionY: y0 + height * (groupBoxIndex.y + 0.5),
      });
      items[i].css({ opacity: opac, visibility: "visible" });
      groupBoxIndex = nextGroupBoxIndex(groupBoxIndex, ncols, nrows);
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
  this.findOne(".iwr-vis-segment-item-text").fill("#0000ff");
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
  this.findOne(".iwr-vis-segment-item-text").fill("#000000");
  var segments = SVG.find(".iwr-vis-segment-item");
  var nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected == 1) {
    return;
  }
  segments.addClass("hovered");
  updateGroups();
};

function applyWeightedHighlights(items, weights) {
  console.assert(items.length == weights.length, items, weights);
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
  var delta = 360 / (names.length + 1);
  for (var i = 0; i < names.length; i++) {
    var group = svg
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
      .path(makeSegment(radius, (i + 0.5) * delta, (i + 1.5) * delta, width))
      .fill(color)
      .stroke("#000000")
      .css({ filter: "drop-shadow(0px 0px 1px)" });
    var strPath = group
      .path(makeTextArc(radius, (i + 0.5) * delta, (i + 1.5) * delta))
      .fill("none")
      .stroke("none");
    strPath
      .text(names[i])
      .addClass("iwr-vis-segment-item-text")
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", "0.55em");
  }
  // label
  var groupLabel = svg.group();
  groupLabel
    .path(makeSegment(radius, -delta / 2.05, delta / 2.05, width))
    .fill("#ffffff");
  var labelPath = groupLabel
    .path(makeTextArc(radius, -delta / 2, delta / 2))
    .fill("none")
    .stroke("none");
  labelPath
    .text(label)
    .attr("startOffset", "50%")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("font-size", "0.66em")
    .attr("fill", color)
    .attr("font-weight", "bold");
  var arrow = groupLabel.marker(4, 4, function (add) {
    add.polyline([0, 0, 4, 2, 0, 4]).fill(color).stroke("none");
  });
  const txtAngle = 4 + label.length / 2;
  const arrowPadding = 3;
  groupLabel
    .path(
      makeArrowArc(radius, arrowPadding + txtAngle, delta / 2 - arrowPadding)
    )
    .fill("none")
    .stroke(color)
    .attr({ "stroke-width": 2 })
    .marker("end", arrow);
  groupLabel
    .path(
      makeArrowArc(radius, -arrowPadding - txtAngle, -delta / 2 + arrowPadding)
    )
    .fill("none")
    .stroke(color)
    .attr({ "stroke-width": 2 })
    .marker("end", arrow);
}

function countLines(str) {
  return (str.match(/\n/g) || "").length + 1;
}

function addGroups(
  svg,
  names,
  method_weights,
  application_weights,
  color,
  border_colour
) {
  var boxHeight = 60;
  var boxWidth = 200;
  var linear = svg
    .gradient("linear", function (add) {
      add.stop({ offset: 0, color: application_color, opacity: 0.3 });
      add.stop({ offset: 1, color: method_color, opacity: 0.1 });
    })
    .from(0, 0)
    .to(0, 1);
  for (var i = 0; i < names.length; i++) {
    var group = svg.group().addClass("iwr-vis-group-item");
    group.on("mouseenter", highlightSegments);
    group.on("mouseclick", highlightSegments);
    group.on("mouseleave", updateSegments);
    group.data("text", names[i][1]);
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    group.css({ transition: "opacity 0.6s, visibility 0.6s" });
    var link = group.group();
    // box
    var padding = 2;
    link
      .rect(boxWidth, boxHeight)
      .radius(10)
      .fill(linear)
      .stroke({ color: border_colour, width: padding });
    // group name
    const numLines = countLines(names[i][1]);
    var txtTop = 2 * padding;
    var txtBottom = 2 * padding;
    if (numLines == 1) {
      txtTop = 15;
      txtBottom = 15;
    } else if (numLines == 2) {
      txtTop = 10;
      txtBottom = 10;
    }
    var groupNamePath = link
      .path(["M", 0, txtTop, "L", boxWidth, txtTop].join(" "))
      .fill("none")
      .stroke("none");
    groupNamePath
      .text(names[i][1])
      .leading(1.1)
      .attr("startOffset", "50%")
      .attr("dominant-baseline", "hanging")
      .attr("text-anchor", "middle")
      .fill("#0000ff")
      .attr("font-weight", "bold")
      .attr("font-size", "0.75em")
      .linkTo(names[i][2]);
    // professor name
    var profNamePath = link
      .path(
        [
          "M",
          0,
          boxHeight - txtBottom,
          "L",
          boxWidth,
          boxHeight - txtBottom,
        ].join(" ")
      )
      .fill("none")
      .stroke("none");
    profNamePath
      .text(names[i][0])
      .attr("startOffset", "50%")
      .attr("dominant-baseline", "auto")
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .attr("font-size", "0.75em");
  }
}

var zoomGroups = function (e) {
  // only zoom in/out if all groups are displayed
  var segments = SVG.find(".iwr-vis-segment-item");
  var nHovered = segments.hasClass("hovered").filter(Boolean).length;
  if (nHovered != segments.length) {
    return;
  }
  var p = this.point(e.clientX, e.clientY);
  var z = 2;
  if (e.deltaY < 0) {
    updateGroups(
      null,
      z,
      200 + (1 - z) * (p.x - 200),
      200 + (1 - z) * (p.y - 200)
    );
  } else {
    updateGroups(null, 1, 200, 200);
  }
};

window.onload = function () {
  var svg = SVG("#iwr-vis-menu-svg");
  // background
  var bg_group = svg.group().addClass("iwr-vis-bg");
  bg_group.click(resetAll);
  bg_group.rect(400, 400).cx(200).cy(200).fill("#ffffff").stroke("#ffffff");

  var inner_circle = svg
    .circle(316)
    .cx(200)
    .cy(200)
    .fill("none")
    .stroke("none");
  svg.on("mousewheel DOMMouseScroll", zoomGroups);

  // groups
  var groups = svg.group();
  groups.clipWith(inner_circle);
  addGroups(
    groups,
    group_names,
    method_weights,
    application_weights,
    group_colour,
    group_border_colour
  );
  // methods
  addSegments(
    svg,
    "METHODS",
    method_names,
    method_groups,
    method_color,
    168,
    10,
    "iwr-vis-method-item"
  );
  // applications
  addSegments(
    svg,
    "APPLICATIONS",
    application_names,
    application_groups,
    application_color,
    188,
    10,
    "iwr-vis-application-item"
  );
  resetAll();

  // iwr logo: animate dot colors
  for (var i = 1; i < 7; ++i) {
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

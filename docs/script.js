"use strict";

// groups: [professor name, group name, webpage]
const group_names = [
  [
    "Prof. Peter Albers",
    "Symplectic Dynamics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Artur Andrzejak",
    "Parallel and\nDistributed Systems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Peter Bastian",
    "Parallel Computing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Hans Georg Bock",
    "Simulation and Optimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Gebhard Böckle",
    "Computational Arithmetic\nGeometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. André Butz",
    "Atmospheric Physics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Peter Comba",
    "Theory and Modeling in Inorganic\nand Bioinorganic Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Andreas Dreuw",
    "Theoretical and Computational\nChemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr. Stefan Fischer",
    "Computational Biochemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Anette Frank",
    "Natural Language\nProcessing Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Frauke Gräter",
    "Molecular Biomechanics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr. Frederik Graw",
    "Modelling Infection & Immunity",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr. Ganna Gryn'ova",
    "Computational Carbon Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Eva Gutheil",
    "Multiphase Flows\nand Combustion",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Roland Herzog",
    "Scientific Computing\nand Optimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Jürgen Hesser",
    "Data Analysis and Modeling\nin Medicine",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Vincent Heuveline",
    "Engineering Mathematics and\nComputing Lab (EMCL)",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "PD Dr. Ahmad Hujeirat",
    "Theoretical and Computational\nAstrophysics",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Bernhard Höfle",
    "3DGeo – 3D Geospatial\nData Processing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Jan Johannes",
    "Statistics of Inverse Problems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Bernd Jähne",
    "Air-Sea Interactions",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Guido Kanschat",
    "Mathematical Methods\nof Simulation",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Ralf Klessen",
    "Theoretical Star\nFormation Studies",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Hans Knüpfer",
    "Applied Analysis\n(CV/PDE)",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Ekaterina Kostina",
    "Numerical Optimization",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Kurt Kremer",
    "Polymer Theory",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Dr. Susanne Krömker",
    "Visualization and\nNumerical Geometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Ursula Kummer",
    "Modeling of\nBiological Processes",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Anna Marciniak-Czochra",
    "Applied Analysis and\nModelling in Biosciences",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Björn Ommer",
    "Computer Vision",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Barbara Paech",
    "Software Engineering",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Jun. Prof. Maria Beatrice Pozzetti",
    "Geometric Group Theory",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Ralf Rannacher",
    "Numerical Methods",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Stefan Riezler",
    "Statistical Natural Language\nProcessing Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Joacim Rocklöv",
    "Artificial Intelligence in the\nResearch of Infectious Diseases\nImpacted by Climate Change",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Kurt Roth",
    "Terrestrial Systems & Chaotic,\nComplex, and Evolving\nEnvironmental Systems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Carsten Rother",
    "Computer Vision\nand Learning Lab",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Filip Sadlo",
    "Visual Computing",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Robert Scheichl",
    "Numerical Analysis and\nUncertainty Quantification",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Christoph Schnörr",
    "Image and Pattern Analysis",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Ulrich Schwarz",
    "Physics of Complex Biosystems",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Oriol Vendrell",
    "Theoretical Chemistry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Rebecca Wade",
    "Molecular and Cellular\nModeling Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Anna Wienhard",
    "Differential Geometry",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Jun. Prof. Jakob Zech",
    "Machine Learning",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
  [
    "Prof. Alexander Zipf",
    "GIScience Research Group",
    "https://typo.iwr.uni-heidelberg.de/",
  ],
];
const group_colour = "#ffffff";

// methods
const method_names = [
  "Mathematical and Numerical Analysis",
  "Numerical Algorithms and Software",
  "Data Analysis and Graphics",
  "Machine Learning and Computer Vision",
  "Arithmetic, Geometry and Topology",
];
const method_anim_ms = 1000;
const method_color = "#e13535";
const method_weights = [
  [1.0, 0.0, 1.0, 0.0, 1.0], //"Prof. Peter Albers",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof. Artur Andrzejak",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Peter Bastian",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Hans Georg Bock",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Gebhard Böckle",
  [0.0, 1.0, 1.0, 0.0, 0.0], //"Prof. André Butz",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Peter Comba",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Andreas Dreuw",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Dr. Stefan Fischer",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof. Anette Frank",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Frauke Gräter",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Dr. Frederik Graw",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Dr. Ganna Gryn'ova",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Eva Gutheil",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Roland Herzog",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Jürgen Hesser",
  [0.0, 1.0, 1.0, 0.0, 0.0], //"Prof. Vincent Heuveline",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"PD Dr. Ahmad Hujeirat",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Bernhard Höfle",
  [1.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Jan Johannes",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof. Bernd Jähne",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Guido Kanschat",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Ralf Klessen",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Hans Knüpfer",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Ekaterina Kostina",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Kurt Kremer",
  [0.0, 0.0, 1.0, 0.0, 1.0], //"Dr. Susanne Krömker",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Ursula Kummer",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Anna Marciniak-Czochra",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Björn Ommer",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Barbara Paech",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Jun Prof. Maria Beatrice Pozzetti",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Rolf Rannacher",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Stefan Riezler",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Joacim Rocklöv",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Kurt Roth",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Carsten Rother",
  [0.0, 0.5, 1.0, 0.0, 1.0], //"Prof. Filip Sadlo",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Robert Scheichl",
  [1.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Christoph Schnörr",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Ulrich Schwarz",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Oriol Vendrell",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Rebecca Wade",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Anna Wienhard",
  [1.0, 0.0, 0.0, 1.0, 0.0], //"Jun Prof. Jakob Zech",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Alexander Zipf",
];

// applications
const application_names = [
  "Molecular Material Science",
  "Medicine and Bioscience",
  "Humanities",
  "Astrophysics",
  "Environmental Sciences",
  "Engineering",
];
const application_color = "#499bce";
const application_weights = [
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Peter Albers",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Artur Andrzejak",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Peter Bastian",
  [0.0, 1.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Hans Georg Bock",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Gebhard Böckle",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. André Butz",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Peter Comba",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Andreas Dreuw",
  [1.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Dr. Stefan Fischer",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Anette Frank",
  [1.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Frauke Gräter",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Dr. Frederik Graw",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Dr. Ganna Gryn'ova",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Eva Gutheil",
  [0.0, 0.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Roland Herzog",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Jürgen Hesser",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Vincent Heuveline",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"PD Dr. Ahmad Hujeirat",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Bernhard Höfle",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Jan Johannes",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Bernd Jähne",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Guido Kanschat",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Ralf Klessen",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Hans Knüpfer",
  [0.0, 1.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Ekaterina Kostina",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Kurt Kremer",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Dr. Susanne Krömker",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Ursula Kummer",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Anna Marciniak-Czochra",
  [0.0, 1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Björn Ommer",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Barbara Paech",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Jun Prof. Maria Beatrice Pozzetti",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Rolf Rannacher",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Stefan Riezler",
  [0.0, 1.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Joacim Rocklöv",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Kurt Roth",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Carsten Rother",
  [0.25, 0.5, 0.0, 0.5, 0.25, 0.5], //"Prof. Filip Sadlo",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Robert Scheichl",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Christoph Schnörr",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Ulrich Schwarz",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Oriol Vendrell",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Rebecca Wade",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Anna Wienhard",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Jun Prof. Jakob Zech",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Alexander Zipf",
];

// https://stackoverflow.com/a/36164530/6465472
function transpose(m) {
  return m[0].map((x, i) => m.map((x) => x[i]));
}

const method_groups = transpose(method_weights);
const application_groups = transpose(application_weights);

// get indices of sorted array of arrays, sorted by given sub-array index
function sorted_indices(array, index) {
  const len = array.length;
  const indices = new Array(len);
  for (let i = 0; i < len; ++i) {
    indices[i] = i;
  }
  indices.sort(function (a, b) {
    return array[a][index] < array[b][index]
      ? -1
      : array[a][index] > array[b][index]
      ? 1
      : 0;
  });
  return indices;
}

const sorted_group_indices = sorted_indices(group_names, 1);
let sort_by_group = false;

// svg circle arc math based on https://stackoverflow.com/a/18473154/6465472
function xy(radius, deg) {
  let rad = ((deg - 90) * Math.PI) / 180.0;
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

// svg path for text inside a segment (single arc)
function makeTextArc(radius, startAngle, endAngle) {
  const anticlockwise = startAngle > 70 && endAngle < 290;
  if (!anticlockwise) {
    radius = radius - 1;
  }
  const p0 = xy(radius, startAngle);
  const p1 = xy(radius, endAngle);
  if (anticlockwise) {
    return ["M", p1.x, p1.y, "A", radius, radius, 0, 0, 0, p0.x, p0.y].join(
      " "
    );
  }
  return ["M", p0.x, p0.y, "A", radius, radius, 0, 0, 1, p1.x, p1.y].join(" ");
}

function makeArrowArc(radius, startAngle, endAngle) {
  const p0 = xy(radius, startAngle);
  const p1 = xy(radius, endAngle);
  const clockwise = endAngle < startAngle ? 0 : 1;
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
  const rm = radius - width;
  const rp = radius + width;
  const p0 = xy(rm, startAngle);
  const p1 = xy(rm, endAngle);
  const p2 = xy(rp, endAngle);
  const p3 = xy(rp, startAngle);
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

let updateSegments = function () {
  SVG.find(".iwr-vis-group-card").css({ opacity: 0, visibility: "hidden" });
  SVG.find(".iwr-vis-group-item").show();
  const segments = SVG.find(".iwr-vis-segment-item");
  for (let segment of segments) {
    if (segment.hasClass("selected")) {
      segment.css({ opacity: 1, filter: "grayscale(0)" });
      segment.animate().attr("stroke-width", 1);
    } else if (segment.hasClass("hovered")) {
      segment.css({ opacity: 1, filter: "grayscale(0)" });
      segment.attr("stroke-width", 0);
    } else {
      segment.css({
        filter: "grayscale(80%)",
        opacity: "20%",
      });
      segment.attr("stroke-width", 0);
    }
  }
};

function nextGroupBoxIndex(p, ncols, nrows = 0) {
  let x_max = ncols - 1;
  let x_min = 0;
  if (ncols === 4) {
    // first 2, last 3 have 2 columns
    if (p.y <= 1 || p.y >= nrows - 4) {
      x_max = 2;
      x_min = 1;
    }
    if (p.y === 1) {
      x_min = 0;
    }
    if (p.y === nrows - 4) {
      x_max = ncols - 1;
    }
  }
  if (p.x < x_max) {
    return { x: p.x + 1, y: p.y };
  }
  return { x: x_min, y: p.y + 1 };
}

function updateGroups(groups, show_all = false, zoom = 1, cx = 200, cy = 200) {
  updateSegments();
  const items = SVG.find(".iwr-vis-group-item");
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
  let ncols = 2;
  let height = 30 * zoom;
  let width = 122 * zoom;
  if (nGroups > 12) {
    ncols = 3;
    height = 26 * zoom;
    width = 100 * zoom;
  }
  let nrows = Math.floor((nGroups + (ncols - 1)) / ncols);
  if (nGroups > 21) {
    ncols = 4;
    groupBoxIndex.x = 1;
    nrows = Math.floor((nGroups + 10 + (ncols - 1)) / ncols);
    width = 65 * zoom;
    height = (280 * zoom) / nrows;
  }
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
      groupBoxIndex = nextGroupBoxIndex(groupBoxIndex, ncols, nrows);
    }
  }
}

const resetAll = function () {
  SVG.find(".iwr-vis-segment-item").addClass("hovered").removeClass("selected");
  updateGroups();
};

const selectSegment = function () {
  const segments = SVG.find(".iwr-vis-segment-item");
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
  this.findOne(".iwr-vis-segment-item-text").fill("#0000ff");
  const segments = SVG.find(".iwr-vis-segment-item");
  const nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected === 1) {
    return;
  }
  segments.removeClass("selected").removeClass("hovered");
  this.addClass("hovered");
  updateGroups(this.data("groups"), true);
};

const leaveSegment = function () {
  this.findOne(".iwr-vis-segment-item-text").fill("#000000");
  const segments = SVG.find(".iwr-vis-segment-item");
  const nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected === 1) {
    return;
  }
  segments.addClass("hovered");
  updateGroups();
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
  const delta = 360 / (names.length + 1);
  for (let i = 0; i < names.length; i++) {
    let group = svg
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
    let strPath = group
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
  let groupLabel = svg.group();
  groupLabel
    .path(makeSegment(radius, -delta / 2.05, delta / 2.05, width))
    .fill("#ffffff");
  let labelPath = groupLabel
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
  let arrow = groupLabel.marker(4, 4, function (add) {
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

function addGroups(svg, names, method_weights, application_weights, colour) {
  const boxHeight = 60;
  const boxWidth = 200;
  const padding = 2;
  for (let i = 0; i < names.length; i++) {
    let groupContainer = svg.group();
    let group = groupContainer.group().addClass("iwr-vis-group-item");
    group.on("mouseenter", highlightSegments);
    group.on("mouseclick", highlightSegments);
    group.on("mouseleave", function () {
      if (!this.hasClass("frozenSegments")) {
        updateSegments();
      }
      return;
    });
    group.data("text", names[i][1]);
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    group.css({
      transition: "opacity 0.6s, visibility 0.6s",
      filter: "drop-shadow(0px 0px 1px)",
    });
    group.click(function () {
      this.addClass("frozenSegments");
      SVG.find(".iwr-vis-group-item").hide();
      this.parent()
        .findOne(".iwr-vis-group-card")
        .front()
        .css({ opacity: 1, visibility: "visible" });
    });
    let link = group.group();
    // box
    link
      .rect(boxWidth, boxHeight)
      .fill(colour)
      .stroke("none")
      .addClass("iwr-vis-group-item-box");
    // group name
    const numLines = countLines(names[i][1]);
    let txtTop = 2 * padding;
    let txtBottom = 2 * padding;
    if (numLines === 1) {
      txtTop = 15;
      txtBottom = 15;
    } else if (numLines === 2) {
      txtTop = 10;
      txtBottom = 10;
    }
    let groupNamePath = link
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
      .attr("font-size", "0.75em");
    // professor name
    let profNamePath = link
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
    group.size(65, 20);
    group.move(200 - boxWidth / 2, 200 - boxHeight / 2);
    addGroupCard(groupContainer, names[i], colour);
  }
}

function addGroupCard(svg, name, colour) {
  let group_card = svg.group().addClass("iwr-vis-group-card");
  group_card.circle(316).cx(200).cy(200).fill("#ffffff").stroke("none");
  group_card
    .rect(210, 210)
    .cx(200)
    .cy(200)
    .fill(colour)
    .stroke("none")
    .css({ filter: "drop-shadow(0px 0px 1px)" });
  group_card.click(function () {
    this.parent().findOne(".iwr-vis-group-item").removeClass("frozenSegments");
    this.css({ opacity: 0, visibility: "hidden" });
    SVG.find(".iwr-vis-group-item").show();
  });
  let groupNamePath = group_card
    .path(["M", 100, 105, "L", 300, 105].join(" "))
    .fill("none")
    .stroke("none");
  groupNamePath
    .text(name[1])
    .leading(1.1)
    .attr("startOffset", "50%")
    .attr("dominant-baseline", "hanging")
    .attr("text-anchor", "middle")
    .fill("#0000ff")
    .attr("font-weight", "bold")
    .attr("font-size", "0.75em")
    .linkTo(name[2]);
  group_card.css({ opacity: 0, visibility: "hidden" });
  if (name[1] === "Visual Computing") {
    group_card
      .image("https://vcg.iwr.uni-heidelberg.de/static/images/sadlo.jpg")
      .size(80, 80)
      .move(160, 120);
  }
  let profNamePath = group_card
    .path(["M", 100, 220, "L", 300, 220].join(" "))
    .fill("none")
    .stroke("none");
  profNamePath
    .text(name[0])
    .attr("startOffset", "50%")
    .attr("dominant-baseline", "auto")
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", "0.75em");
  let blurb = group_card.foreignObject(180, 120).attr({ x: 110, y: 230 });
  blurb.add(
    SVG(
      '<div xmlns="http://www.w3.org/1999/xhtml" class="iwr-vis-group-card-html"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum imperdiet eros. Aliquam erat volutpat.</div>',
      true
    )
  );
}

const zoomGroups = function (e) {
  // only zoom in/out if all groups are displayed
  const segments = SVG.find(".iwr-vis-segment-item");
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
      200 + (1 - z) * (p.y - 200)
    );
  } else {
    updateGroups(null, true, 1, 200, 200);
  }
};

const sortGroupsByProf = function () {
  const group = SVG.find(".iwr-vis-settings-menu-sort-by-group");
  const prof = SVG.find(".iwr-vis-settings-menu-sort-by-prof");
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
  const line_colour = "#777777";
  const bg_colour = "#ffffff";
  const width = 100;
  const height = 60;
  const padding = 4;
  const radius = 2;
  let settings = svg.group().addClass("iwr-vis-settings-menu");
  settings.on("mouseenter", function () {
    this.findOne(".iwr-vis-settings-menu-large").show();
  });
  settings.on("mouseleave", function () {
    this.findOne(".iwr-vis-settings-menu-large").hide();
  });
  // button
  let settings_button = settings
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
  let settings_menu = settings.group().addClass("iwr-vis-settings-menu-large");
  settings_menu
    .rect(width, height)
    .radius(radius)
    .stroke(line_colour)
    .fill(bg_colour);
  settings_menu.hide();
  // group sorting options
  settings_menu
    .path(["M", 6, 6, "L", 100, 6].join(" "))
    .fill("none")
    .stroke("none")
    .text("Sort by")
    .attr("dominant-baseline", "hanging")
    .attr("font-size", "0.5em")
    .fill(line_colour);
  let sort_by_group = settings_menu.group();
  sort_by_group
    .rect(8, 8)
    .radius(1)
    .stroke(line_colour)
    .fill(bg_colour)
    .move(12, 24)
    .addClass("iwr-vis-settings-menu-sort-by-group");
  sort_by_group
    .path(["M", 24, 24, "L", 100, 24].join(" "))
    .fill("none")
    .stroke("none")
    .text("group name")
    .attr("font-size", "0.5em")
    .attr("dominant-baseline", "hanging")
    .fill(line_colour);
  sort_by_group.click(sortGroupsByProf);
  let sort_by_prof = settings_menu.group();
  sort_by_prof
    .rect(8, 8)
    .radius(1)
    .stroke(line_colour)
    .fill(line_colour)
    .move(12, 24 + 12)
    .addClass("iwr-vis-settings-menu-sort-by-prof");
  sort_by_prof
    .path(["M", 24, 24 + 12, "L", 100, 24 + 12].join(" "))
    .fill("none")
    .stroke("none")
    .text("professor name")
    .attr("font-size", "0.5em")
    .attr("dominant-baseline", "hanging")
    .fill(line_colour);
  sort_by_prof.click(sortGroupsByProf);
  settings_menu.transform({
    translateX: 400 - width - padding,
    translateY: padding,
  });
}

window.onload = function () {
  let svg = SVG("#iwr-vis-menu-svg");
  // background
  let bg_group = svg.group().addClass("iwr-vis-bg");
  bg_group.click(resetAll);
  bg_group.rect(400, 400).cx(200).cy(200).fill("#ffffff").stroke("#ffffff");

  let inner_circle = svg
    .circle(316)
    .cx(200)
    .cy(200)
    .fill("none")
    .stroke("none");
  svg.on("wheel", zoomGroups);

  // groups
  let groups = svg.group();
  groups.clipWith(inner_circle);
  addGroups(
    groups,
    group_names,
    method_weights,
    application_weights,
    group_colour
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
  // settings menu
  addSettings(svg);
};

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

const method_anim_ms = 1000;

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

/*global SVG*/

let updateSegments = function () {
  SVG.find(".iwr-vis-group-card").css({ opacity: 0, visibility: "hidden" });
  SVG.find(".iwr-vis-group-item").show();
  const segments = SVG.find(".iwr-vis-segment-item");
  for (let segment of segments) {
    if (segment.hasClass("selected")) {
      segment.css({ opacity: 1, filter: "grayscale(0)" });
      segment.findOne(".iwr-vis-segment-item-text").fill("#ffffff");
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0.5);
    } else if (segment.hasClass("hovered")) {
      segment.css({ opacity: 1, filter: "grayscale(0)" });
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0);
      segment.findOne(".iwr-vis-segment-item-text").fill("#000000");
    } else {
      segment.css({
        filter: "grayscale(80%)",
        opacity: "20%",
      });
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0);
      segment.findOne(".iwr-vis-segment-item-text").fill("#000000");
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
  items.findOne(".iwr-vis-group-item-groupname").show();
  items.findOne(".iwr-vis-group-item-profname-small").show();
  items.findOne(".iwr-vis-group-item-profname-large").hide();
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
    items.findOne(".iwr-vis-group-item-groupname").hide();
    items.findOne(".iwr-vis-group-item-profname-small").hide();
    items.findOne(".iwr-vis-group-item-profname-large").show();
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
  const segments = SVG.find(".iwr-vis-segment-item");
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
  const group = SVG.find(".iwr-vis-settings-menu-sort-by-group-checkbox");
  const prof = SVG.find(".iwr-vis-settings-menu-sort-by-prof-checkbox");
  if (this.findOne(".iwr-vis-settings-menu-sort-by-prof-checkbox") != null) {
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

window.onload = function () {
  SVG("#iwr-vis-menu-svg").on("wheel", zoomGroups);
  SVG.find(".iwr-vis-bg").click(resetAll);
  SVG.find(".iwr-vis-segment-item")
    .click(selectSegment)
    .on("mouseenter", hoverSegment)
    .on("mouseleave", leaveSegment);

  SVG.find(".iwr-vis-group-item")
    .on("mouseenter", highlightSegments)
    .on("mouseleave", function () {
      if (!this.hasClass("frozenSegments")) {
        updateSegments();
      }
      return;
    })
    .click(function () {
      this.addClass("frozenSegments");
      SVG.find(".iwr-vis-group-item").hide();
      this.parent()
        .findOne(".iwr-vis-group-card")
        .front()
        .css({ opacity: 1, visibility: "visible" });
    });

  SVG.find(".iwr-vis-group-card").click(function () {
    this.parent().findOne(".iwr-vis-group-item").removeClass("frozenSegments");
    this.css({ opacity: 0, visibility: "hidden" });
    SVG.find(".iwr-vis-group-item").show();
  });

  SVG.find(".iwr-vis-settings-menu")
    .on("mouseenter", function () {
      this.findOne(".iwr-vis-settings-menu-large").show();
    })
    .on("mouseleave", function () {
      this.findOne(".iwr-vis-settings-menu-large").hide();
    });
  SVG.find(".iwr-vis-settings-menu-sort-by-group").click(sortGroupsByProf);
  SVG.find(".iwr-vis-settings-menu-sort-by-prof").click(sortGroupsByProf);
  resetAll();
};

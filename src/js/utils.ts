export function shortenName(full_name: string, newline: boolean) {
  const words = full_name.split(" ");
  const short_name = [words[0]];
  for (const word of words.slice(1, -1)) {
    if (word.slice(-1) === ".") {
      // title: keep full word
      short_name.push(word);
    } else {
      // optionally add a newline after titles
      if (newline === true) {
        short_name.push("\n");
        newline = false;
      }
      // ignore if starts with "("
      if (word.at(0) != "(") {
        // name: keep only first initial & add .
        short_name.push(word[0] + ".");
      }
    }
  }
  // surname: keep full word
  short_name.push(words.at(-1));
  return short_name.join(" ");
}

export function getFileFromName(full_name: string) {
  // filename is "SURNAME_sw/0.png" with any ' chars first removed from SURNAME
  return full_name.split(" ").at(-1).split("'").join("") + "_sw/0.png";
}

export function countLines(str: string) {
  return (str.match(/\n/g) || "").length + 1;
}

// https://stackoverflow.com/a/36164530/6465472
export function transpose<T>(m: T[][]) {
  return m[0].map((x, i) => m.map((x) => x[i]));
}

// get indices of sorted array of objects, sorted by given member of object
export function sorted_indices(
  array: Record<string, object>[],
  member: string,
) {
  const len = array.length;
  const indices = new Array(len);
  for (let i = 0; i < len; ++i) {
    indices[i] = i;
  }
  indices.sort(function (a, b) {
    return array[a][member] < array[b][member]
      ? -1
      : array[a][member] > array[b][member]
        ? 1
        : 0;
  });
  return indices;
}

// svg circle arc math based on https://stackoverflow.com/a/18473154/6465472
function xy(radius: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180.0;
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

// svg path for text inside a segment (single arc)
export function makeTextArc(
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const anticlockwise = startAngle > 70 && endAngle < 290;
  if (anticlockwise) {
    radius = radius + 2;
  } else {
    radius = radius - 3;
  }
  const p0 = xy(radius, startAngle);
  const p1 = xy(radius, endAngle);
  if (anticlockwise) {
    return ["M", p1.x, p1.y, "A", radius, radius, 0, 0, 0, p0.x, p0.y].join(
      " ",
    );
  }
  return ["M", p0.x, p0.y, "A", radius, radius, 0, 0, 1, p1.x, p1.y].join(" ");
}

export function makeArrowArc(
  radius: number,
  startAngle: number,
  endAngle: number,
) {
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
export function makeSegment(
  radius: number,
  startAngle: number,
  endAngle: number,
  width: number,
) {
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

export function computeCircleGrid(
  nGroups: number,
  aspectRatio: number,
  radius: number,
): {
  positions: { x: number; y: number }[];
  cellWidth: number;
  cellHeight: number;
} {
  const padding = 0.9;

  function tryFit(h: number): { x: number; y: number }[] | null {
    const w = h * aspectRatio;
    const positions: { x: number; y: number }[] = [];
    const halfH = h / 2;
    // stack rows from top to bottom
    const firstRowCenter = -Math.floor((radius - halfH) / h) * h;
    for (
      let rowCenter = firstRowCenter;
      rowCenter + halfH <= radius;
      rowCenter += h
    ) {
      const dy = Math.abs(rowCenter);
      if (dy + halfH > radius) continue;
      const chordHalf = Math.sqrt(
        radius * radius - (dy + halfH) * (dy + halfH),
      );
      const cols = Math.floor((2 * chordHalf) / w);
      if (cols <= 0) continue;
      const rowLeft = -(cols * w) / 2;
      for (let c = 0; c < cols; c++) {
        positions.push({
          x: rowLeft + (c + 0.5) * w,
          y: rowCenter,
        });
      }
    }
    return positions.length >= nGroups ? positions : null;
  }

  // binary search for the largest cell height that fits nGroups cards
  let lo = 1;
  let hi = Math.min(2 * radius, (2 * radius) / (3 * aspectRatio) / padding);
  let bestH = lo;
  let bestPositions: { x: number; y: number }[] = [];

  for (let iter = 0; iter < 50; iter++) {
    const mid = (lo + hi) / 2;
    const result = tryFit(mid * padding);
    if (result) {
      bestH = mid * padding;
      bestPositions = result;
      lo = mid;
    } else {
      hi = mid;
    }
  }

  // trim to exactly nGroups, centering the selection
  // pick positions closest to center first for a balanced look
  if (bestPositions.length > nGroups) {
    // sort rows by distance from center, fill from center outward
    bestPositions.sort((a, b) => {
      const da = Math.abs(a.y) + Math.abs(a.x) * 0.01;
      const db = Math.abs(b.y) + Math.abs(b.x) * 0.01;
      return da - db;
    });
    bestPositions = bestPositions.slice(0, nGroups);
    // re-sort top-to-bottom, left-to-right for display order
    bestPositions.sort((a, b) => a.y - b.y || a.x - b.x);
  }

  return {
    positions: bestPositions,
    cellWidth: bestH * aspectRatio,
    cellHeight: bestH,
  };
}

export function shortenName(full_name: string, newline: boolean) {
  const words = full_name.split(" ");
  const short_name = [words[0]];
  for (const word of words.slice(1, -1)) {
    if (word.slice(-1) === ".") {
      // title: keep full word
      short_name.push(word);
    } else {
      // name: keep only first initial & add .
      short_name.push(word[0] + ".");
    }
  }
  // optionally add a newline before surname
  if (newline === true) {
    short_name.push("\n");
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
export function sorted_indices(array: any, member: string) {
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
  endAngle: number
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
      " "
    );
  }
  return ["M", p0.x, p0.y, "A", radius, radius, 0, 0, 1, p1.x, p1.y].join(" ");
}

export function makeArrowArc(
  radius: number,
  startAngle: number,
  endAngle: number
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
  width: number
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

export function nextGroupBoxIndex(
  p: { x: number; y: number },
  ncols: number,
  nrows = 0
) {
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

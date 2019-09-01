function getRandom(minimum, maximum, integer = true) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  const random = Math.random() * (max - min);
  return integer ? Math.floor(random) + min : random;
}

const renderGraphic = (graphic) => {
  let renderedGraphic = `
    <g id="${graphic.id}">
      ${graphic.paths.map(path => `<path d="${path.points.join(', ')}" id="${path.id}" fill="${path.fill}"></path>`).join('')}
    </g>
  `;
  return renderedGraphic;
}

module.exports = function generateSVG(width = 24, height = 24, colors = ['#000000'], complexity = 'basic') {
  const graphics = [];
  const groupCount = complexity === 'complex' ?  getRandom(2, 5) : 1;
  for (let groups = 0; groups < groupCount; groups++) {
    const group = {
      id: `group-${groups}`,
      paths: []
    };
    // Generate a certain number of paths for each graphic group.
    const pathCount = complexity === 'complex' ? getRandom(4, 8) : getRandom(1, 4);
    for (let paths = 0; paths < pathCount; paths++) {
      // Generate a path.
      // TODO:
      // Sample a color from the array of colors.
      const path = {
        id: `path-${paths}`,
        points: []
      }
      // Allow for no fill.
      if (colors.length > 0) {
        path.fill =  colors[Math.floor(Math.random() * colors.length)];
      }
      // Generate a certain number of points for each path.
      const pointCount = complexity === 'complex' ? getRandom(3, 8) : getRandom(1, 5);
      // Add a starting point for the path.
      path.points.push(`M${getRandom(0, width, false)}`);
      for (let points = 0; points < pointCount; points++) {
        path.points.push(`${getRandom(1, width, false)} ${getRandom(1, height, false)}`);
      }
      group.paths.push(path);
    }
    // Generate a group.
    graphics.push(group);
  }

  const svg = `<svg
    viewBox="0 0 ${width} ${height}"
    xmlns="http://www.w3.org/2000/svg"
    >
      ${graphics.map(graphic => renderGraphic(graphic))}
  </svg>`;
  return svg;
}
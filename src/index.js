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
      const path = {
        id: `path-${paths}`,
        points: []
      }
      // Allow for no fill.
      if (colors.length > 0) {
        // Sample a color from the array of colors.
        path.fill =  colors[Math.floor(Math.random() * colors.length)];
      }
      // Generate a certain number of points for each path.
      const pointCount = complexity === 'complex' ? getRandom(3, 8) : getRandom(2, 5);
      // Allow for a certain amount of travel for each point, but step promote some sort of "semi-linear" progression.
      const maxRanges = {
        x: getRandom(1, width),
        y: getRandom(1, height),
      };
      // Add a starting point for the path.
      const locations = [
        {
          x: getRandom(0, width, false),
          y: getRandom(0, height, false)
        }
      ];
      path.points.push(`M${locations[0].x}`);
      for (let points = 1; points < pointCount; points++) {
        const previousPoint = locations[points - 1] || {x: 0, y: 0};
        const min = {
          x: previousPoint.x - maxRanges.x,
          y: previousPoint.y - maxRanges.y
        };
        const max = {
          x: previousPoint.x + maxRanges.x,
          y: previousPoint.y + maxRanges.y
        };
        // Each point is drawn off of the previous point, instead of purely random points.
        const nextPoint = {
          x: getRandom(min.x, max.x, false),
          y: getRandom(min.y, max.y, false)
        }
        path.points.push(`${nextPoint.x} ${nextPoint.y}`);
        // Keep track of each point that is added.
        locations.push(nextPoint);
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
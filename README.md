# Procedural SVG generator [![npm version](https://badge.fury.io/js/donatello-svg.svg)](https://badge.fury.io/js/donatello-svg)

# Overview
Automatically generate SVG assets with random paths, shapes and fill colors.

# Options (all are optional)
- Width (in pixels)
- Height (in pixels)
- Colors (array of hex colors)
- Paths (number)

# Usage

```javascript
import generateSVG from 'donatello-svg';

const basicSVG = generateSVG(28, 28);
const specificColorSVG = generateSVG(28, 28, ['#cc66aa', '#33eeff']);
const specificPathsSVG = generateSVG(28, 28, ['#bbaa88'], 4);

...
<div>
  {basicSVG}
</div>
```
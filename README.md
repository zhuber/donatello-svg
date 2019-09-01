# Procedural SVG generator [![npm version](https://badge.fury.io/js/donatello-svg.svg)](https://badge.fury.io/js/donatello-svg)

# Overview
Automatically generate SVG assets with random paths, shapes and fill colors.

# Options (all are optional)
- Width
- Height
- Colors (array of hex colors, or empty array for no fill, ex: [])
- Complexity (number)

# Usage

## Javascript
```
import generateSVG from 'donatello-svg';

const basicSVG = generateSVG(28, 28);
const specificColorSVG = generateSVG(28, 28, ['#cc66aa', '#33eeff']);
const complexSVG = generateSVG(28, 28, ['#bbaa88'], 'complex');

...
<div>
  {basicSVG}
</div>
```

## React
```
import generateSVG from 'donatello-svg';
import InlineSVG from 'svg-inline-react'; // Note: This is required in many cases to output inline SVGs.

const specificColorSVG = generateSVG(28, 28, ['#cc66aa', '#33eeff']);

...
<div>
  <InlineSVG src={specificColorSVG} />
</div>
```
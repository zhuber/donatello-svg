# Procedural SVG generator [![npm version](https://badge.fury.io/js/donatello-svg.svg)](https://badge.fury.io/js/donatello-svg)

![Procedural SVG](http://drive.google.com/uc?export=view&id=1M43r5b4ARsU4MTb-hUdD9SQxZagBwiHs)

# Overview
Automatically generate SVG assets with random paths, shapes and fill colors.

# Options (all are optional)
- Width
- Height
- Colors (array of hex colors, or empty array for no fill, ex: [])
- Complexity (defaults to 'basic', but can also be set to 'complex')

# Usage

## Javascript
```
import generateSVG from 'donatello-svg';

const basicSVG = generateSVG(28, 28);
const specificColorSVG = generateSVG(28, 28, ['#cc66aa', '#ffeeff']);
const complexSVG = generateSVG(28, 28, ['#bbaa88', '#33eeff', '#ccaaee'], 'complex');

...
<div>
  {basicSVG} // Note: This is output as a string and you may need to massage the output depending on where you attempt to render it.
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
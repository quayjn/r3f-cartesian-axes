This is a customizable 3D Cartesian Axis coordinate system for 
[@react-three/fiber](https://github.com/pmndrs/react-three-fiber).

## Installation
```bash
npm install quayjn/r3f-cartesian-axes
```

Place the component into your 'components' directory and it should be ready to go. 

Download the [sample project](https://github.com/quayjn/r3f-cartesian-axes/tree/master/demo) 
to see it in a working React Three Fiber app, working nicely with [leva's user controls](https://github.com/pmndrs/leva).

## Basic usage
```jsx
import CartesianAxes from 'components/R3FCoordinateAxes'

<Canvas>
  <CartesianAxes />
</Canvas>
```
## Parameters
| Parameter        | Type        | Default Value | Description                                                      |
|------------------|-------------|---------------|------------------------------------------------------------------|
| `includeX`       | `boolean`   | `true`        | Show the x-axis.                                                 |
| `includeY`       | `boolean`   | `true`        | Show the y-axis.                                                 |
| `includeZ`       | `boolean`   | `false`       | Show the z-axis.                                                 |
| `xColor`         | `hexstring` | `#9d4b4b`     | The color of the x-axis.                                         |
| `yColor`         | `hexstring` | `#2f7f4f`     | The color of the y-axis.                                         |
| `zColor`         | `hexstring` | `#3b5b9d`     | The color of the z-axis.                                         |
| `thickness`      | `number`    | `1`           | Thickness of the axes. Gets weird at larger values.              |
| `depth`          | `number`    | `2000`        | How far the axes go. Actual results depend on camera settings.   |
| `tickspacing`    | `number`    | `20`          | Spacing for the ticks. Zero means no ticks.                      |
| `ticklength`     | `number`    | `15`          | Length of the ticks.                                             |
| `includeLabels`  | `boolean`   | `true`        | Whether to include text for the numeric coordinate of each tick. |

## Future Features
<ul>
<li> Include a toggle to hide the controls.</li>
<li> Include [leva's user controls](https://github.com/pmndrs/leva) or something similar as a default inclusion in the install</li>
<li> Allow for new instances of the axes to be created at any point in 3D space</li>
</ul>

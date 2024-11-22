/**
 * Component Name: R3F Cartesian Axes
 * Description: Provides a customizable 3D set of Cartesian Axes for use with React Three Fiber.
 * Author: Quayjn aka Rudy Ruidoso
 * Version: 1.0.0
 * License: MIT (or any other applicable license)
 * Last Modified: 2024-10-29
 */
import {Text} from "@react-three/drei";

export default function CartesianAxes({
  includeX=true, includeY=true, includeZ=true,
  xColor=0x9d4b4b, yColor=0x2f7f4f, zColor=0x3b5b9d, 
  thickness=1, depth=2000, tickspacing=20, ticklength=15, includeLabels=true
  }) { 

  if (!(includeX || includeY || includeZ)) { return (<></>); }

  const axes = [];
  const ticksX = [];
  const ticksY = [];
  const ticksZ = [];

  var strLabelPos, strLabelNeg

  if (includeX) { 
    axes.push(
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI/2]} key={`axisx`} >
        <cylinderGeometry args={[thickness, thickness, 2 * depth, 16]} />
        <meshBasicMaterial color={xColor} /> 
      </mesh>
    );
    if (tickspacing > 0) {
      for (var i=tickspacing; i<=depth; i+=tickspacing) {
        strLabelPos = strLabelNeg = "";
        if (includeLabels) {
          strLabelPos = (
            <Text  key={`labelx-${i}`}
              position={[0, -(1 + ticklength/2), 0]} rotation={[0, 0, 0]} 
              anchorX="center" anchorY="top" color={xColor} 
              fontSize={thickness * tickspacing/3}>{i.toFixed(0)}</Text>
          )
          strLabelNeg = (
            <Text  key={`labelx-${i}-neg`}
              position={[0, -(1 + ticklength/2), 0]} rotation={[0, 0, 0]} 
              anchorX="center" anchorY="top" color={xColor}
              fontSize={thickness * tickspacing/3}>-{i.toFixed(0)}</Text>)
        }
        ticksX.push(
          <mesh position={[i, 0, 0]} rotation={[0, 0, 0]} key={`tickx-${i}-pos`}> 
            <cylinderGeometry args={[thickness/2, thickness/2, ticklength, 16]} />
            <meshBasicMaterial color={xColor} />{strLabelPos}</mesh>
        );
        ticksX.push(
          <mesh position={[-i, 0, 0]} rotation={[0, 0, 0]} key={`tickx-${i}-neg`}> 
            <cylinderGeometry args={[thickness/2, thickness/2, ticklength, 16]} />
            <meshBasicMaterial color={xColor} />{strLabelNeg}</mesh>
        );
      }
    }
  }

  if (includeY) { 
    axes.push(
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} key={`axisy`}>
        <cylinderGeometry args={[thickness, thickness, 2 * depth, 16]} />
        <meshBasicMaterial color={yColor} />
      </mesh>
    );
    if (tickspacing > 0) {
      for (var i=tickspacing; i<=depth; i+=tickspacing) {
        strLabelPos = strLabelNeg = "";
        if (includeLabels) {
          strLabelPos = (
            <Text  key={`labely-${i}`}
              position={[0, 1 + ticklength/2, 0]} rotation={[0, 0, -Math.PI/2]} 
              anchorX="right" anchorY="middle" color={yColor} 
              fontSize={thickness * tickspacing/3}>{i.toFixed(0)}</Text>
          )
          strLabelNeg = ( 
            <Text  key={`labely-${i}-neg`}
              position={[0, 1 + ticklength/2, 0]} rotation={[0, 0, -Math.PI/2]}
              anchorX="right" anchorY="middle" color={yColor} 
              fontSize={thickness * tickspacing/3}>-{i.toFixed(0)}</Text>
          )
        }

        ticksY.push(
          <mesh position={[0, i, 0]} rotation={[0, 0, Math.PI/2]} key={`ticky-${i}-pos`}> 
            <cylinderGeometry args={[thickness/2, thickness/2, ticklength, 16]} />
            <meshBasicMaterial color={yColor} />{strLabelPos}</mesh>
        )
        ticksY.push(
          <mesh position={[0, -i, 0]} rotation={[0, 0, Math.PI/2]} key={`ticky-${i}-neg`}> 
            <cylinderGeometry args={[thickness/2, thickness/2, ticklength, 16]} />
            <meshBasicMaterial color={yColor} />{strLabelNeg}</mesh>
        )
      }
    }
  }

  if (includeZ) { 
    axes.push(
      <mesh position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]} key={`axisz`}>
        <cylinderGeometry args={[thickness, thickness, 2*depth, 16]} />
        <meshBasicMaterial color={zColor} />
      </mesh>
    );
    if (tickspacing > 0) {
      for (var i=tickspacing; i<=depth; i+=tickspacing) {

        strLabelPos = strLabelNeg = "";
        if (includeLabels) {
          strLabelPos = (
            <Text key={`labelz-${i}-pos`}
              position={[0, -(1 + ticklength/2), 0]} rotation={[0, Math.PI/2, 0]} 
              anchorY="right" anchorZ="top" color={zColor} 
              fontSize={thickness * tickspacing/3}>{i.toFixed(0)}</Text>
          )
          strLabelNeg = (
            <Text  key={`labelz-${i}-neg`}
              position={[0, -(1 + ticklength/2), 0]} rotation={[0, Math.PI/2, 0]}
              anchorY="right" anchorZ="top" color={zColor} 
              fontSize={thickness * tickspacing/3}>-{i.toFixed(0)}</Text>
          )
        }

        ticksZ.push(
          <mesh position={[0, 0, i]} rotation={[0, 0, 0]} key={`tickz-${i}`}> 
            <cylinderGeometry args={[thickness/2, thickness/2, ticklength, 16]} />
            <meshBasicMaterial color={zColor} />
            {strLabelPos}
          </mesh>
        );
        ticksZ.push(
          <mesh position={[0, 0, -i]} rotation={[0, 0, 0]} key={`tickz-${i}-neg`}> 
            <cylinderGeometry args={[thickness/2, thickness/2, ticklength, 16]} />
            <meshBasicMaterial color={zColor} />
            {strLabelNeg}
          </mesh>
        );

      }
    }
  }

  return (
    <>
      <group position={[0, 0, 0]}>
        {axes}
        {(includeX)?<group>{ticksX}</group>:<></>}
        {(includeY)?<group>{ticksY}</group>:<></>}
        {(includeZ)?<group>{ticksZ}</group>:<></>}
      </group>
    </>
  );
}
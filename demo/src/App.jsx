import { Canvas } from "@react-three/fiber";
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { useControls } from "leva";
import CartesianAxes from "./components/R3FCartesianAxes";
import "./App.css";

function App() {
  const axesConfig = useControls({
    xColor: "#9d4b4b",
    yColor: "#2f7f4f",
    zColor: "#3b5b9d",
    tickspacing: 50,
    ticklength: 15,
    thickness: 1,
    depth: 10000,
    includeLabels: true,
    includeX: true,
    includeY: true,
    includeZ: false,
  });

  return (
    <Canvas
      className="demo"
      gl={{ antialias: true }}
      camera={{
        position: [0, 0, 100],
        fov: 50,
        near: 0.1,
        far: 100000,
        makeDefault: true,
      }}
    >
      <CartesianAxes {...axesConfig} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={[axesConfig.xColor, axesConfig.yColor, axesConfig.zColor]}
          labelColor="white"
        />
      </GizmoHelper>

      <mesh position={[50, 50, -30]}>
        <sphereGeometry args={[20, 32, 32]} />
        <meshStandardMaterial
          color={"#B29999"}
          transparent={false}
          depthWrite={true}
        />
      </mesh>

      <mesh position={[-50, -50, 20]}>
        <sphereGeometry args={[20, 32, 32]} />
        <meshStandardMaterial
          color={"#9999B2"}
          transparent={false}
          depthWrite={true}
        />
      </mesh>
    </Canvas>
  );
}

export default App;

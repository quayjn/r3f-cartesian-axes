import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { useControls } from 'leva';
import CartesianAxes from './components/R3FCartesianAxes';

function App() {

  const axesConfig = useControls({
    xColor: '#9d4b4b', 
    yColor: '#2f7f4f',
    zColor: '#3b5b9d', 
    tickspacing: 50,
    ticklength: 15,
    thickness: 1,
    depth: 10000,
    includeLabels: true,
    includeX: true,
    includeY: true, 
    includeZ: false
  })

  return (
    <>
      <Canvas gl = {{antialias:true}}
              style={{width:'calc(100vw - 30px)', height:'calc(100vh - 70px)',
                      left:'10px', top:'50px', backgroundColor:'#EDEDCC'}}
                      camera={{ position:[0, 0, 100
                      ], fov:50, near:0.1, far:100000, makeDefault:true }}>                      
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />

        <CartesianAxes {...axesConfig} />

        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport 
            axisColors={[axesConfig.xColor, axesConfig.yColor, axesConfig.zColor]}
            labelColor="white" />
        </GizmoHelper>

      </Canvas>
    </>
  );
}

export default App;
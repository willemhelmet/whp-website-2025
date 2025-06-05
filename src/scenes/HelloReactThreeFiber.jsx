import { Grid, Box, Sphere, Plane, Sky, Environment } from "@react-three/drei";
import OrbitControlsWrapper from "../components/utils/OrbitControlsWrapper";
import Player from "../components/3d/player";
import DefaultWorld from "../components/3d/DefaultWorld.jsx";

function HelloReactThreeFiber() {
  return (
    <>
      <DefaultWorld />
      <Plane
        position={[0, -0.001, 0]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        scale={[100, 100, 1]}
        receiveShadow
      >
        <meshPhongMaterial color="#ffffff" />
      </Plane>
      <Sky />
      <Box position={[2, 0.5, -2]} castShadow receiveShadow>
        <meshPhongMaterial />
      </Box>
      <Sphere position={[1, 2, 3]} castShadow receiveShadow>
        <meshPhongMaterial />
      </Sphere>
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
    </>
  );
}

export default HelloReactThreeFiber;

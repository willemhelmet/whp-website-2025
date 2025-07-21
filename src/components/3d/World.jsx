import { Grid, Box, Sphere, Plane, Sky, Environment } from "@react-three/drei";
import Player from "./Player";
import { TeleportTarget } from "@react-three/xr";
import { useState } from "react";
import { Vector3 } from "three";
function World() {
  const [position, setPosition] = useState(new Vector3());
  return (
    <>
      <Player position={position} />
      <Environment preset="studio" />
      <Grid infiniteGrid={true} sectionColor={"#0f0f0f"} />

      <TeleportTarget onTeleport={setPosition}>
        <mesh scale={[10, 1, 10]} position={[0, -0.5, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="green" />
        </mesh>
      </TeleportTarget>

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
        <meshPhongMaterial color="#ff0000" />
      </Box>
      <Sphere position={[1, 2, 3]} castShadow receiveShadow>
        <meshPhongMaterial color="#00ff00" />
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

export default World;

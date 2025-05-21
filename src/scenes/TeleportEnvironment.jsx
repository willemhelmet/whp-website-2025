import { Grid, Environment } from "@react-three/drei";
import { TeleportTarget } from "@react-three/xr";
import { useState } from "react";
import { Vector3 } from "three";
import Player from "../components/3d/player";
import OrbitControlsWrapper from "../components/utils/OrbitControlsWrapper";

function TeleportEnvironment() {
  const [position, setPosition] = useState(new Vector3());

  // Define teleport target positions
  const platforms = [
    { position: [0, -0.51, 0], size: [100, 1, 100], color: "green" },
    { position: [5, 1, 0], size: [8, 1, 8], color: "blue" },
    { position: [-5, 2, 0], size: [6, 1, 6], color: "purple" },
    { position: [0, 3, 5], size: [8, 1, 8], color: "orange" },
    { position: [0, 4, -5], size: [6, 1, 6], color: "red" },
  ];

  return (
    <>
      <OrbitControlsWrapper />
      <Environment preset="studio" />
      <Grid infiniteGrid={true} sectionColor={"#0f0f0f"} />
      <Player position={position} />

      {/* Teleport platforms */}
      {platforms.map((platform, index) => (
        <TeleportTarget key={index} onTeleport={setPosition}>
          <mesh
            position={platform.position}
            scale={platform.size}
            castShadow
            receiveShadow
          >
            <boxGeometry />
            <meshPhongMaterial color={platform.color} />
          </mesh>
        </TeleportTarget>
      ))}

      {/* Lighting */}
      <directionalLight
        position={[10, 10, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-camera-near={0.1}
        shadow-camera-far={100}
      />
      <ambientLight intensity={0.2} />
    </>
  );
}

export default TeleportEnvironment;

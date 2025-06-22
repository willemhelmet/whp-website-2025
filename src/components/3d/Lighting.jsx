import React from "react";
import { Sky } from "@react-three/drei";
import { Vector3 } from "three";

function Lighting() {
  const sunPosition = new Vector3(10, 10, 10);
  return (
    <>
      <group>
        {/* Basic lighting setup */}
        <Sky sunPosition={sunPosition} />
        <directionalLight
          position={sunPosition}
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
      </group>
    </>
  );
}

export default Lighting;

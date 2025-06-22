import { useRef, useEffect, useState } from "react";
import { XROrigin, useXRControllerLocomotion, useXR } from "@react-three/xr";
import { usePlayer } from "../../contexts/PlayerContext";
import Ecctrl from "ecctrl";
// import { useFrame } from "@react-three/fiber";

function Player() {
  const { position } = usePlayer();

  const session = useXR((state) => state.session);
  const mode = useXR((state) => state.mode);
  const originRef = useRef();

  const isInXR =
    !!session || mode === "immersive-ar" || mode === "immersive-vr";

  const xrCamera = useXR((state) => state.camera);

  useEffect(() => {
    // console.log("Is in XR:", isInXR);
    // console.log("Current XR session:", session);
    // console.log("Current XR mode:", mode);
  }, [isInXR, session, mode]);

  useXRControllerLocomotion(originRef, {
    translationOptions: {
      speed: 2, // Adjust movement speed
    },
    rotationOptions: {
      deadZone: 0.1, // Minimum joystick movement to trigger rotation
      type: "smooth", // Smooth rotation
      speed: 2, // Rotation speed
    },
    translationController: "left", // Use left controller for movement
  });

  return (
    <>
      {isInXR ? (
        <XROrigin ref={originRef} position={position} />
      ) : (
        <Ecctrl
          position={[0, 0, 0]} // Consider if this should also use 'position' from usePlayer
          rotation={[0, Math.PI, 0]}
          camCollision={false}
          camInitDis={-0.01}
          camMinDis={-0.01}
          camFollowMult={1000}
          camLerpMult={1000}
          turnVelMultiplier={1}
          turnSpeed={100}
          mode="CameraBasedMovement"
          camZoomSpeed={0}
        />
      )}
    </>
  );
}

export default Player;

import React, { useRef } from "react";
import { useXRControllerLocomotion } from "@react-three/xr";
import { XROrigin } from "@react-three/xr";
import { usePlayer } from "../../contexts/PlayerContext";

function Player() {
  const originRef = useRef();
  const { position } = usePlayer();

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

  return <XROrigin ref={originRef} position={position} />;
}

export default Player;

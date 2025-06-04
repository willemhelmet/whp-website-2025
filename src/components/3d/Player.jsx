import { useRef } from "react";
import { useXRControllerLocomotion } from "@react-three/xr";
import { XROrigin } from "@react-three/xr";
import { usePlayer } from "../../contexts/PlayerContext";
import Ecctrl from "ecctrl";

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

  return (
    <>
      <Ecctrl
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        camCollision={false} // disable camera collision detect (useless in FP mode)
        camInitDis={-0.01} // camera intial position
        camMinDis={-0.01} // camera zoom in closest position
        camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
        camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
        turnVelMultiplier={1} // Turning speed same as moving speed
        turnSpeed={100} // give it big turning speed to prevent turning wait time
        mode="CameraBasedMovement" // character's rotation will follow camera's rotation in this mode
        camZoomSpeed={0}
      />
      <XROrigin ref={originRef} position={position} />;
      {/* <PointerLockControls /> */}
    </>
  );
}

export default Player;

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { XROrigin, useXRControllerLocomotion, useXR } from "@react-three/xr";
import { usePlayer } from "../../contexts/PlayerContext";
import Ecctrl from "ecctrl";
import { socket } from "../utils/SocketManager.jsx";
import { Vector3, Quaternion } from "three";
//import { PointerLockControls } from "@react-three/drei";

function Player() {
  const { position } = usePlayer();
  const { camera } = useThree();

  const session = useXR((state) => state.session);
  const mode = useXR((state) => state.mode);
  const originRef = useRef();

  const isInXR =
    !!session || mode === "immersive-ar" || mode === "immersive-vr";

  // const xrCamera = useXR((state) => state.camera);
  //
  // useEffect(() => {
  // console.log("Is in XR:", isInXR);
  // console.log("Current XR session:", session);
  // console.log("Current XR mode:", mode);
  // }, [isInXR, session, mode]);

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

  const lastPosition = useRef(new Vector3());
  const lastQuaternion = useRef(new Quaternion());

  useFrame(() => {
    const currentPosition = new Vector3();
    const currentQuaternion = new Quaternion();

    if (isInXR) {
      // AI: In XR, the camera's world position is what we need
      camera.getWorldPosition(currentPosition);
      camera.getWorldQuaternion(currentQuaternion);
    } else {
      // AI: In flatscreen, the Ecctrl component moves a parent object
      // Assuming the camera is a good proxy for player's position
      camera.getWorldPosition(currentPosition);
      camera.getWorldQuaternion(currentQuaternion);
    }

    // AI: Send update only if position or rotation have changed significantly
    if (
      currentPosition.distanceTo(lastPosition.current) > 0.1 ||
      !currentQuaternion.equals(lastQuaternion.current)
    ) {
      lastPosition.current.copy(currentPosition);
      lastQuaternion.current.copy(currentQuaternion);
      socket.emit(
        "move",
        currentPosition.toArray(),
        currentQuaternion.toArray(),
      );
    }
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

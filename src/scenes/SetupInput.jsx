import { useState } from "react";
import { Vector3 } from "three";
import { TeleportTarget, useXRInputSourceState } from "@react-three/xr";
import { Grid, Environment, Text, Sky, Plane } from "@react-three/drei";
import Player from "../components/3d/player";
import OrbitControlsWrapper from "../components/utils/OrbitControlsWrapper";
import { useFrame } from "@react-three/fiber";
import DefaultWorld from "../components/3d/DefaultWorld.jsx";

function SetupInput() {
  const [position, setPosition] = useState(new Vector3());
  const sunPosition = new Vector3(10, 10, 10);

  // Create state for input values
  const [leftInputs, setLeftInputs] = useState({
    xButton: false,
    yButton: false,
    trigger: 0,
    grip: 0,
    joystickX: 0,
    joystickY: 0,
    joystickClick: false,
  });

  const [rightInputs, setRightInputs] = useState({
    aButton: false,
    bButton: false,
    trigger: 0,
    grip: 0,
    joystickX: 0,
    joystickY: 0,
    joystickClick: false,
  });

  // Get controller states
  const leftController = useXRInputSourceState("controller", "left");
  const rightController = useXRInputSourceState("controller", "right");

  // Update input states every frame
  useFrame(() => {
    if (leftController?.gamepad) {
      const gamepad = leftController.gamepad;
      setLeftInputs({
        xButton: gamepad["x-button"]?.button ?? 0,
        yButton: gamepad["y-button"]?.button ?? 0,
        trigger: gamepad["xr-standard-trigger"]?.state ?? 0,
        grip: gamepad["xr-standard-squeeze"]?.state ?? 0,
        joystickX: gamepad["xr-standard-thumbstick"].xAxis ?? 0,
        joystickY: gamepad["xr-standard-thumbstick"].yAxis ?? 0,
        joystickClick: gamepad["x-standard-thumbstick"]?.button ?? false,
      });
    }

    if (rightController?.gamepad) {
      const gamepad = rightController.gamepad;
      setRightInputs({
        aButton: gamepad["a-button"]?.button ?? 0,
        bButton: gamepad["b-button"]?.button ?? 0,
        trigger: gamepad["xr-standard-trigger"]?.state ?? 0,
        grip: gamepad["xr-standard-squeeze"]?.state ?? 0,
        joystickX: gamepad["xr-standard-thumbstick"].xAxis ?? 0,
        joystickY: gamepad["xr-standard-thumbstick"].yAxis ?? 0,
        joystickClick: gamepad["x-standard-thumbstick"]?.button ?? false,
      });
    }
  });

  // Input labels for both controllers
  const leftInputLabels = [
    { label: "X Button:", value: leftInputs.xButton ? "Pressed" : "Released" },
    { label: "Y Button:", value: leftInputs.yButton ? "Pressed" : "Released" },
    { label: "Trigger:", value: leftInputs.trigger },
    { label: "Grip:", value: leftInputs.grip },
    { label: "Joystick X:", value: leftInputs.joystickX.toFixed(3) },
    { label: "Joystick Y:", value: leftInputs.joystickY.toFixed(3) },
    {
      label: "Joystick Click:",
      value: leftInputs.joystickClick ? "Pressed" : "Released",
    },
  ];

  const rightInputLabels = [
    { label: "A Button:", value: rightInputs.aButton ? "Pressed" : "Released" },
    { label: "B Button:", value: rightInputs.bButton ? "Pressed" : "Released" },
    { label: "Trigger:", value: rightInputs.trigger },
    { label: "Grip:", value: rightInputs.grip },
    { label: "Joystick X:", value: rightInputs.joystickX.toFixed(3) },
    { label: "Joystick Y:", value: rightInputs.joystickY.toFixed(3) },
    {
      label: "Joystick Click:",
      value: rightInputs.joystickClick ? "Pressed" : "Released",
    },
  ];

  return (
    <>
      <DefaultWorld />
      <Plane scale={[100, 100, 1]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <meshBasicMaterial color={"#404040"} />
      </Plane>
      <Sky sunPosition={sunPosition} />
      <TeleportTarget onTeleport={setPosition}>
        <mesh scale={[100, 1, 100]} position={[0, -0.5, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="green" opacity={0.0} transparent />
        </mesh>
      </TeleportTarget>

      {/* Left Controller Inputs */}
      <group position={[-2, 2, -3]}>
        <Plane
          scale={[2.5, 2.5, 1]}
          position={[1, -1, -0.01]}
          rotation={[0, 0, 0]}
        >
          <meshBasicMaterial color="#000000" opacity={0.7} transparent />
        </Plane>
        {leftInputLabels.map((input, index) => (
          <Text
            key={`left-${index}`}
            position={[0, -index * 0.3, 0]}
            fontSize={0.2}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            {`${input.label} ${input.value}`}
          </Text>
        ))}
      </group>

      {/* Right Controller Inputs */}
      <group position={[2, 2, -3]}>
        <Plane
          scale={[2.5, 2.5, 1]}
          position={[1, -1, -0.1]}
          rotation={[0, 0, 0]}
        >
          <meshBasicMaterial color="#000000" opacity={0.7} transparent />
        </Plane>
        {rightInputLabels.map((input, index) => (
          <Text
            key={`right-${index}`}
            position={[0, -index * 0.3, 0]}
            fontSize={0.2}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            {`${input.label} ${input.value}`}
          </Text>
        ))}
      </group>

      {/* Basic lighting setup */}
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
    </>
  );
}

export default SetupInput;

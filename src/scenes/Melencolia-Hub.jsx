import DefaultWorld from "../components/3d/DefaultWorld";
import DurersSolid from "../components/3d/Durers-solid.jsx";
import Portal from "../components/3d/Portal.jsx";
import { Float, Line } from "@react-three/drei";

export default function MelencoliaHub() {
  // Precompute portal positions
  const innerPortalPositions = Array.from({ length: 6 }).map((_, i) => {
    const angle = (i * Math.PI * 2) / 6;
    const radius = 4;
    const x = radius * Math.cos(angle);
    const z = 4 + radius * Math.sin(angle);
    return [x, 0, z];
  });
  const outerPortalPositions = Array.from({ length: 6 }).map((_, i) => {
    const angle = (i * Math.PI * 2) / 6;
    const radius = 8;
    const x = radius * Math.cos(angle);
    const z = 4 + radius * Math.sin(angle);
    return [x, 0, z];
  });

  const scenes = [
    { scene: "melencoliaScene1", label: "melencolia scene 1" },
    { scene: "melencoliaScene2", label: "melencolia scene 2" },
    { scene: "melencoliaScene3", label: "melencolia scene 3" },
    { scene: "melencoliaScene4", label: "melencolia scene 4" },
    { scene: "melencoliaScene5", label: "melencolia scene 5" },
    { scene: "melencoliaScene6", label: "melencolia scene 6" },
    { scene: "melencoliaScene7", label: "melencolia scene 7" },
    { scene: "melencoliaScene8", label: "melencolia scene 8" },
    { scene: "melencoliaScene9", label: "melencolia scene 9" },
    { scene: "melencoliaScene10", label: "melencolia scene 10" },
    { scene: "melencoliaScene11", label: "melencolia scene 11" },
    { scene: "melencoliaScene12", label: "melencolia scene 12" },
  ];

  return (
    <>
      <group>
        <Line
          points={[
            innerPortalPositions[0],
            innerPortalPositions[2],
            innerPortalPositions[4],
            innerPortalPositions[0],
          ]}
          lineWidth={5}
          color="red"
        />
        <Line
          points={[
            innerPortalPositions[1],
            innerPortalPositions[3],
            innerPortalPositions[5],
            innerPortalPositions[1],
          ]}
          lineWidth={5}
          color="blue"
        />
        {innerPortalPositions.map((_, i) => (
          <Line
            key={`inner-outer-line-${i}`}
            points={[innerPortalPositions[i], outerPortalPositions[i]]}
            lineWidth={5}
            color="green"
          />
        ))}
        <Line
          points={[...outerPortalPositions, outerPortalPositions[0]]}
          lineWidth={5}
          color="orange"
        />
      </group>

      <Float
        position={[0, 0.5, 4]}
        speed={1.75}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <DurersSolid />
      </Float>
      <DefaultWorld portal={false} lighting={false} />
      {/* Add colored lights around the Durer's solid */}
      {/* Red light (matches inner triangle) */}
      <pointLight
        position={[2, 2, 0]}
        color="red"
        intensity={1.2}
        distance={8}
      />
      {/* Blue light (matches other inner triangle) */}
      <pointLight
        position={[-2, 2, 0]}
        color="blue"
        intensity={1.2}
        distance={8}
      />
      {/* Green lights (matches connecting lines) */}
      <pointLight
        position={[0, 2, 2]}
        color="green"
        intensity={1.2}
        distance={8}
      />
      <pointLight
        position={[0, 2, -2]}
        color="green"
        intensity={1.2}
        distance={8}
      />
      {/* Orange light (matches outer hexagon) */}
      <pointLight
        position={[0, 4, 0]}
        color="orange"
        intensity={1.5}
        distance={10}
      />
      {/* Subtle ambient light for overall illumination */}
      <ambientLight intensity={0.25} />
      {/* TODO: Make portals point to actual scenes */}
      {/* Inner hexagon */}
      {innerPortalPositions.map((pos, i) => (
        <Portal
          key={`inner-${i}`}
          position={pos}
          targetScene={scenes[i].scene}
          label={scenes[i].label}
        />
      ))}
      {/* Outer hexagon */}
      {outerPortalPositions.map((pos, i) => (
        <Portal
          key={`outer-${i}`}
          position={pos}
          targetScene={scenes[i + 6].scene}
          label={scenes[i + 6].label}
        />
      ))}
    </>
  );
}

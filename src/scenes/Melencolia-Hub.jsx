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
      <DefaultWorld portal={false} />
      {/* Inner hexagon */}
      {innerPortalPositions.map((pos, i) => (
        <Portal
          key={`inner-${i}`}
          position={pos}
          targetScene={`SceneInner${i + 1}`}
          label={`Portal ${i + 1}`}
        />
      ))}
      {/* Outer hexagon */}
      {outerPortalPositions.map((pos, i) => (
        <Portal
          key={`outer-${i}`}
          position={pos}
          targetScene={`SceneOuter${i + 1}`}
          label={`Portal ${i + 7}`}
        />
      ))}
    </>
  );
}

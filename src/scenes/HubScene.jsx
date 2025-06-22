import Portal from "../components/3d/Portal.jsx";
import DefaultWorld from "../components/3d/DefaultWorld.jsx";

export default function HubScene() {
  const scenes = [
    {
      scene: "teleport",
      label: "setup teleport",
    },
    {
      scene: "interactions",
      label: "setup interactions",
    },
    {
      scene: "input",
      label: "setup input",
    },
    {
      scene: "physics",
      label: "setup physics",
    },
    {
      scene: "tree",
      label: "creative coding tree",
    },
    {
      scene: "firstShader",
      label: "my first shader",
    },
    {
      scene: "firstParticles",
      label: "my first particle system",
    },
    {
      scene: "firstPostProcessing",
      label: "my first post processing",
    },
    {
      scene: "gradientMountain",
      label: "gradient mountain scene",
    },
    {
      scene: "creativeCodingReflection",
      label: "creative coding reflection",
    },
    {
      scene: "setupPortals",
      label: "setup portals",
    },
    {
      scene: "world",
      label: "world",
    },
    {
      scene: "volumetricSpotLightArticleScene",
      label: "volumetric spot light",
    },
    {
      scene: "melencoliaHub",
      label: "durer's solid",
    },
  ];
  return (
    <>
      <DefaultWorld />
      {scenes.map((sceneInfo, index) => {
        const angle = (index / scenes.length) * Math.PI * 2;
        const radius = 5;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <group key={index}>
            <Portal
              position={[x, 0, z]}
              targetScene={sceneInfo.scene}
              label={sceneInfo.label}
            />
          </group>
        );
      })}
    </>
  );
}

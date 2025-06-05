import { useState } from "react";
import { SceneProvider } from "../contexts/SceneContext.jsx";
import { sceneDefinitions } from "../config/scenes";

// import World from "./HelloReactThreeFiber";
// import TeleportEnvironment from "./TeleportEnvironment";
// import SetupInteractions from "./SetupInteractions";
// import SetupInput from "./SetupInput";
// import SetupPhysics from "./SetupPhysics";
// import CreativeCodingTree from "./CreativeCodingTree";
// import MyFirstShader from "./MyFirstShader.tsx";
// import MyFirstParticleSystem from "./MyFirstParticleSystem.jsx";
// import MyFirstPostProcessing from "./MyFirstPostProcessing.jsx";
// import GradientMountainScene from "./GradientMountainScene.jsx";
// import CreativeCodingReflection from "./CreativeCodingReflection.tsx";
// import SetupPortals from "./SetupPortals.jsx";
// import HubScene from "./HubScene.jsx";

// const scenes = {
//   world: World,
//   teleport: TeleportEnvironment,
//   interactions: SetupInteractions,
//   input: SetupInput,
//   physics: SetupPhysics,
//   tree: CreativeCodingTree,
//   firstShader: MyFirstShader,
//   firstParticles: MyFirstParticleSystem,
//   firstPostProcessing: MyFirstPostProcessing,
//   gradientMountain: GradientMountainScene,
//   creativeCodingReflection: CreativeCodingReflection,
//   setupPortals: SetupPortals,
//   hub: HubScene,
// };

export default function SceneManager() {
  const [currentScene, setCurrentScene] = useState("hub");
  // const Scene = scenes[currentScene];
  const SceneComponent = sceneDefinitions[currentScene]?.component;

  if (!SceneComponent) {
    console.warn(`Scene "${currentScene}" not found, falling back to hub`);
    return <SceneManager defaultScene="hub" />;
  }

  return (
    <SceneProvider
      currentScene={currentScene}
      setCurrentScene={setCurrentScene}
    >
      <SceneComponent />
    </SceneProvider>
  );
}

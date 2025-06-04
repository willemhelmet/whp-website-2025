import { useState } from "react";
import World from "./HelloReactThreeFiber";
import TeleportEnvironment from "./TeleportEnvironment";
import SetupInteractions from "./SetupInteractions";
import SetupInput from "./SetupInput";
import SetupPhysics from "./SetupPhysics";
import CreativeCodingTree from "./CreativeCodingTree";
import MyFirstShader from "./MyFirstShader.tsx";
import MyFirstParticleSystem from "./MyFirstParticleSystem.jsx";
import MyFirstPostProcessing from "./MyFirstPostProcessing.jsx";
import GradientMountainScene from "./GradientMountainScene.jsx";
import CreativeCodingReflection from "./CreativeCodingReflection.tsx";

const scenes = {
  world: World,
  teleport: TeleportEnvironment,
  interactions: SetupInteractions,
  input: SetupInput,
  physics: SetupPhysics,
  tree: CreativeCodingTree,
  firstShader: MyFirstShader,
  firstParticles: MyFirstParticleSystem,
  firstPostProcessing: MyFirstPostProcessing,
  gradientMountain: GradientMountainScene,
  creativeCodingReflection: CreativeCodingReflection,
};

function SceneManager() {
  const [currentScene, setCurrentScene] = useState("firstParticles");
  const Scene = scenes[currentScene];

  return (
    <>
      <Scene />
    </>
  );
}

export default SceneManager;

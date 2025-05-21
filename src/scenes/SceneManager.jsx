import { useState } from "react";
import World from "./HelloReactThreeFiber";
import TeleportEnvironment from "./TeleportEnvironment";
import SetupInteractions from "./SetupInteractions";
import SetupInput from "./SetupInput";
import SetupPhysics from "./SetupPhysics";
import CreativeCodingTree from "./CreativeCodingTree";

const scenes = {
  world: World,
  teleport: TeleportEnvironment,
  interactions: SetupInteractions,
  input: SetupInput,
  physics: SetupPhysics,
  tree: CreativeCodingTree,
};

function SceneManager() {
  const [currentScene, setCurrentScene] = useState("tree");
  const Scene = scenes[currentScene];

  return (
    <>
      <Scene />
      {/* Add scene switching UI here if needed */}
    </>
  );
}

export default SceneManager;

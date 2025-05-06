import React, { useState } from "react";
import World from "./HelloReactThreeFiber";
import TeleportEnvironment from "./TeleportEnvironment";
import SetupInteractions from "./SetupInteractions";
import SetupInput from "./SetupInput";
import SetupPhysics from "./SetupPhysics";

const scenes = {
  world: World,
  teleport: TeleportEnvironment,
  interactions: SetupInteractions,
  input: SetupInput,
  physics: SetupPhysics,
};

function SceneManager() {
  const [currentScene, setCurrentScene] = useState("physics");
  const Scene = scenes[currentScene];

  return (
    <>
      <Scene />
      {/* Add scene switching UI here if needed */}
    </>
  );
}

export default SceneManager;

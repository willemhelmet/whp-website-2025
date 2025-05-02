import React, { useState } from "react";
import World from "./HelloReactThreeFiber";
import TeleportEnvironment from "./TeleportEnvironment";
import SetupInteractions from "./SetupInteractions";
import SetupInput from "./SetupInput";

const scenes = {
  world: World,
  teleport: TeleportEnvironment,
  interactions: SetupInteractions,
  input: SetupInput,
};

function SceneManager() {
  const [currentScene, setCurrentScene] = useState("input");
  const Scene = scenes[currentScene];

  return (
    <>
      <Scene />
      {/* Add scene switching UI here if needed */}
    </>
  );
}

export default SceneManager;

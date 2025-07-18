import { useEffect } from "react";
import { SceneProvider } from "../contexts/SceneContext.jsx";
import { useSceneManager } from "../hooks/useScene.js";
import { sceneDefinitions } from "../config/scenes";
import { socket } from "../components/utils/SocketManager.jsx";
import { OtherPlayers } from "../components/3d/OtherPlayers.jsx";

function CurrentScene() {
  const { currentScene } = useSceneManager();
  const SceneComponent = sceneDefinitions[currentScene]?.component;

  useEffect(() => {
    // let the server know which scene/room the player has joined
    socket.emit("join_scene", currentScene);
  }, [currentScene]);

  if (!SceneComponent) {
    console.warn(`Scene "${currentScene}" not found, falling back to hub`);
    // You might want to render a default component here instead of null
    return null;
  }

  return (
    <>
      <SceneComponent />
      <OtherPlayers />
    </>
  );
}

export default function SceneManager() {
  return (
    <SceneProvider initialScene="jnl">
      <CurrentScene />
    </SceneProvider>
  );
}

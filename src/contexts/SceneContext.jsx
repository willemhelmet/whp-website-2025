import { createContext, useContext, useState, useCallback } from "react";

const SceneContext = createContext();

export const SceneProvider = ({ children, initialScene }) => {
  const [currentScene, setCurrentScene] = useState(initialScene);
  const [isTeleporting, setIsTeleporting] = useState(false);

  const teleportTo = useCallback((sceneName) => {
    setIsTeleporting(true);
    setCurrentScene(sceneName);
  }, []);

  const completeTeleport = useCallback(() => {
    setIsTeleporting(false);
  }, []);

  return (
    <SceneContext.Provider
      value={{
        currentScene,
        isTeleporting,
        teleportTo,
        completeTeleport,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};

export function useScene() {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error("useScene must be used within a SceneProvider");
  }
  return context;
}

export function useSceneManager() {
  return useScene();
}

import { createContext, useContext } from "react";

const SceneContext = createContext();

export const SceneProvider = ({ children, currentScene, setCurrentScene }) => {
  return (
    <SceneContext.Provider value={{ currentScene, setCurrentScene }}>
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

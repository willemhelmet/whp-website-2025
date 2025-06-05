import { createContext, useState, useContext } from "react";
import { Vector3 } from "three";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [position, setPosition] = useState(new Vector3());

  return (
    <PlayerContext.Provider value={{ position, setPosition }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}

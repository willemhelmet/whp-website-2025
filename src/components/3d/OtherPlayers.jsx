import { useAtom } from "jotai";
import { playersAtom, socket } from "../utils/SocketManager.jsx";
import OtherPlayer from "./OtherPlayer.jsx";

export const OtherPlayers = () => {
  const [players] = useAtom(playersAtom);
  return (
    <group>
      {players
        .filter((player) => player.id !== socket.id)
        .map(
          (player) =>
            // Ensure player data includes a position
            player.position && (
              <OtherPlayer
                key={player.id}
                position={player.position}
                rotation={player.rotation}
              />
            ),
        )}
    </group>
  );
};

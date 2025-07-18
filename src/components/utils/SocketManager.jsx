import { useEffect } from "react";
import { io } from "socket.io-client";
import { atom, useAtom } from "jotai";

export const socket = io("https://whpmultiplayer.rcdis.co");
export const playersAtom = atom([]);

export const SocketManager = () => {
  const [players, setPlayers] = useAtom(playersAtom);

  useEffect(() => {
    function onConnect() {
      console.log("client connected");
    }
    function onDisconnect() {
      console.log("client disconnected");
    }
    function onPlayers(value) {
      setPlayers(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("players", onPlayers);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("players", onPlayers);
    };
  }, [setPlayers]);
  return <></>;
};

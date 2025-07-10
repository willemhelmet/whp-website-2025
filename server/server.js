import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

io.listen(3001);
const players = [];

io.on("connection", (socket) => {
  console.log("user connected:", socket.id);

  players.push({
    id: socket.id,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  });

  io.emit("players", players);

  socket.on("move", (position, rotation) => {
    const player = players.find((p) => p.id === socket.id);
    if (player) {
      player.position = position;
      player.rotation = rotation;
      io.emit("players", players);
    }
  });

  socket.on("join_scene", (sceneName) => {
    console.log("player has entered ", sceneName);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    const index = players.findIndex((p) => p.id === socket.id);
    if (index !== -1) {
      players.splice(index, 1);
    }
    io.emit("players", players);
  });
});

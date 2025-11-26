const { io } = require("socket.io-client");

function createBot(name) {
  const socket = io("http://localhost:3000", {
    transports: ["websocket"], // forza websocket puro
  });

  socket.on("connect", () => {
    console.log(`🤖 ${name} connesso al server con id:`, socket.id);
  });

  socket.on("match_start", (data) => {
    console.log(`🏁 🤖 ${name} match trovato!`);
    console.log(`   → Room: ${data.roomId}`);
    console.log(`   → Players: ${data.players.join(", ")}`);
  });

  socket.on("disconnect", () => {
    console.log(`❌ 🤖 ${name} disconnesso`);
  });

  return socket;
}

// crea 2 bot reali
createBot("Bot1");
createBot("Bot2");

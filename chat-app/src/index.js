const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { isObject } = require("util");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.port || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

let count = 0;

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.emit("countUpdated", count);

  socket.on("increment", () => {
    count++;

    io.emit("countUpdated", count); // notify all clients not like socket.emit user client
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

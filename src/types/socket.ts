import dist = require("socket.io");

export interface PlayerSocket extends dist.Socket {
  roomId?: string;
}

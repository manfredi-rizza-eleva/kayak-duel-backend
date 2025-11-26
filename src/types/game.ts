import { RoomState } from "./room";

export type Game = {
  rooms: {
    [roomId: string]: RoomState;
  };
};

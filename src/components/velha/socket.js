import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  player: {},
  player1: null,
  player2: null,
  gameState : [
    [
      0,0,0
    ],
    [
      0,0,0
    ],
    [
      0,0,0
    ]
  ]
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const socket = io(URL);

export function makeMove(i, j) {
  console.log('move')
  socket.emit('move', i, j, state.player.id)
}

socket.on("connect", () => {
  state.connected = true;
  state.player.id = socket.id
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("setup", (...args) => {
  console.log("> Receiving");
  console.log(args[0]);
  state.gameState = args[0].gameState;
  state.player1 = args[0].player1;
  state.player2 = args[0].player2;
});
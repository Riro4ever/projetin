import express from "express";
import http from 'http';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

let gameState = [
  [
    0,0,0
  ],
  [
    0,0,0
  ],
  [
    0,0,0
  ]
];
let game = {
  gameState: gameState,
  player1: null,
  player2: null
}

app.get('/', (req, res) => {
  res.send({status: "success"});
});
  
io.on('connection', (socket) => {
  if(!game.player1) {
    game.player1 = socket.id;
    console.log('players1: ' + game.player1);
  } else if(!game.player2) {
    game.player2 = socket.id;
    console.log('players2: ' + game.player2);
  }

  socket.emit('setup', game);
  socket.on("move", (i, j, playerid) => {
    if( 0 <= i <= 2 && 0 <= j<= 2 && !game.gameState[i][j]) {
      const valueMove = playerid == game.player1 ? 1 : (playerid == game.player2 ? 2 : 0);
      game.gameState[i][j] = valueMove;
      io.emit('setup', game)
      console.log('move: ' + i + j + playerid);
    }
  });
});



app.use(express.static('public'))

server.listen(3000, () =>{
    console.log('> server listening on port: 3000')
})
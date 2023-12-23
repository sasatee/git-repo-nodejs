const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome ");
});

//using Event Emitter API

const server = http.createServer();

//emit request event
//subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(3000, () => {
  console.log("Listening to port : 3000");
});

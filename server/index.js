import { App } from "uWebSockets.js";

function ServerHandler(listenSocket) {
  if (listenSocket) {
    console.log("Listening to port 9002");
  }
}

function GetHello(res, req) {
  res.end("Hello there!");
}

App()
  .addServerName("socketslatencybench")
  .get("/*", GetHello)
  .listen(9002, ServerHandler);

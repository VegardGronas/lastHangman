const express = require("express");
const server = express();
const games = require('./modules/games');
const PORT = process.env.PORT || 8080;
server.set("PORT", PORT);

server.use(express.static("public"));
server.use(express.json());
server.use(games);

server.listen(server.get("PORT"), function(){
    console.log("Server running at port", PORT);
})
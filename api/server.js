const usersRouter = require('./users/users-router');


const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use("/api/users", usersRouter);



server.get("/", (req, res, next) => {
    console.log("api up!!!");
    next()
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });
  
  module.exports = server;
  
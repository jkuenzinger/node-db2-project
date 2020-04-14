const express = require('express');

const carRouter = require("./cars/cars_router")

const server = express();

server.use(express.json());
server.use ("/", carRouter);

module.exports= server;
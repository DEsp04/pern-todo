//framework for server
const express = require("express");

const app = express();

//Allows different domain applications to interact with each other. Server will run on 5000, and react application will run on 3000 
const cors = require("cors");

//logs request and morgan happens to be a middleware for logger. it helps generate request logs
const logger = require("morgan");


//pg will connect db with server in order to run postgres query

const todoRoutes = require("./routes/index");

//Middleware
//data from the client side is taken from the req.body object. express.json give us access to the req.body
app.use(express.json());

app.use(logger("dev"));

app.use(cors());

app.get("/", (req, res) => res.send("API is running!"));

app.use("/api", todoRoutes);



module.exports = app;
const { Router } = require("express");
const todoRouter = Router();
const todoControllers = require("../controllers/index");

//Routes


//create a todo
todoRouter.post(
  "/todos",
  todoControllers.createTodo
);

//get all todos
todoRouter.get(
  "/todos",
  todoControllers.getTodo
);

//get a todo


//update a todo


//delete a todo



module.exports = todoRouter;
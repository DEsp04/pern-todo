const { Router, application } = require("express");
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
  todoControllers.getAllTodo
);

//get a todo
todoRouter.get("/todos/:id",
  todoControllers.getTodo
);

//update a todo
todoRouter.put("/todos/:id",
  todoControllers.updateTodo
);

//delete a todo



module.exports = todoRouter;
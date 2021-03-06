const { Router, application } = require("express");
const todoRouter = Router();
const todoControllers = require("../controllers/index");

//Routes
//Restful API with Postgres

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
todoRouter.delete("/todos/:id",
  todoControllers.deleteTodo
);


module.exports = todoRouter;
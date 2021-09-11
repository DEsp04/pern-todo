const pool = require("../db/index");


//create a todo
const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);

  } catch (err) {
    console.error(err.message);
  }
};


//get all todos
const getAllTodo = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows)

  } catch (err) {
    console.error(err.message);
  }
};


//get a todo
const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

    res.json(todo.rows[0]) 
  } catch (err) {
    console.error(err.message);
  }

}

//update a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])

    res.json("Todo was updated!")
  } catch (err) {
    console.error(err.message);
  }

}

//delete todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])

    res.json("todo item was deleted");
  } catch (err) {
    console.error(err.message);
  }

}




module.exports = {
  createTodo,
  getAllTodo,
  getTodo,
  updateTodo,
  deleteTodo,
}
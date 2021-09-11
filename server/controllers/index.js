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



module.exports = {
  createTodo,
  getAllTodo,
  getTodo
}
const pool = require("../db/index");

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

const getTodo = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows)

  } catch (err) {
    console.error(err.message);
  }
};


module.exports = {
  createTodo,
  getTodo,
}
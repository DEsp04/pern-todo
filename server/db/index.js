//connecting database to server
const Pool = require("pg").Pool;

//set up configuration for postgres
const pool = new Pool({
  user: "davidespinal",
  password: "",
  host: "localhost",
  port: 5432,
  database: "perntodo"
})


module.exports = pool;
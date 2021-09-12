import React, {useEffect, useState} from 'react'






function ListTodos() {

  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      
      const response = await fetch("http://localhost:5000/api/todos")

      //parse the data
      const jsonData = await response.json()

      setTodos(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  }


  useEffect(() => {
    getTodos();
  }, [])  

  // console.log(todos)

  return (
    <div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (
            <tr>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListTodos

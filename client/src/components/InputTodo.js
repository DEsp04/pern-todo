import React, { useState } from 'react';

function InputTodo() {

  const [description, setDescription] = useState("")

  //submit form to send data out
  const onSubmitForm = async (e) => {
    //preven form from refreshing
    e.preventDefault()
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        //sending json data to the server
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        
      })
    
      // console.log(response)

      //when response has been sent, it will refresh the page and show changes
      window.location = "/";

    } catch (err) {
      console.error(err.message)
    }
  }
  

  return (
    <div>
      <h1 className="text-center mt-5">Pern Todo List</h1>

      <form className="d-flex mt-5 mx-4" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={description} onChange={ e => setDescription(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  )
}

export default InputTodo

import React, { useEffect, useState } from "react"
import "./App.css"
import Item from "./components/Item"
import axios from "axios"
import Footer from "./components/Footer"

const App = () => {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])
  const [isUpdating, setUpdating] = useState("")
  useEffect(() => {
    axios
      .get("https://todo-app-backend-394f.onrender.com/get-todo")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err))
  })
  const addUpdateToDo = () => {
    if (isUpdating === "") {
      axios
        .post("https://todo-app-backend-394f.onrender.com/save-todo", { text })
        .then((res) => {
          console.log(res.data)
          setText("")
          alert(`${text} is added`)
        })
        .catch((err) => console.log(err))
    } else {
      axios
        .post("https://todo-app-backend-394f.onrender.com/update-todo", {
          _id: isUpdating,
          text,
        })
        .then((res) => {
          console.log(res.data)
          setText("")
          setUpdating("")
          alert(`${text} is updated`)
        })
        .catch((err) => console.log(err))
    }
  }
  const deleteToDo = (_id) => {
    axios
      .post("https://todo-app-backend-394f.onrender.com/delete-todo", { _id })
      .then((res) => {
        console.log(res.data)
        alert("Deleted Successfully")
      })
      .catch((err) => console.log(err))
  }
  const updateToDo = (_id, text) => {
    setUpdating(_id)
    setText(text)
  }
  return (
    <div className='App'>
      <div className='container'>
        <h1>List your Items...</h1>
        <div className='top'>
          <input
            type='text'
            placeholder='Write Something..'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className='add' onClick={addUpdateToDo}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className='list'>
          {todo.map((item) => (
            <Item
              className='text'
              key={item._id}
              text={item.text}
              remove={() => deleteToDo(item._id)}
              update={() => updateToDo(item._id, item.text)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

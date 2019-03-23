import React, { useState } from "react"

export default ({ addTodo }) => {
  // React useState Hook
  const [task, setTask] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(task)
    setTask("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

import React from "react"

export default ({ toggleTodo, todos }) => {
  return (
    <div>
      {todos &&
        todos.map(todo => (
          <div
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : ""
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.task}
          </div>
        ))}
    </div>
  )
}

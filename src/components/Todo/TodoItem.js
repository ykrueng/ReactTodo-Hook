import React from "react"
import { List } from "semantic-ui-react"

export default ({ todo, handleClick }) => {
  return (
    <List.Item key={todo.id} onClick={() => handleClick(todo.id)}>
      <List.Icon name={todo.completed ? "check" : ""} />
      <List.Content
        style={{
          cursor: "pointer",
          color: todo.completed ? "teal" : "inherit"
        }}
      >
        {todo.task}
      </List.Content>
    </List.Item>
  )
}

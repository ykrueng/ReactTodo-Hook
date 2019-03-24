import React from "react"
import { List } from "semantic-ui-react"

export default ({ item, handleClick }) => {
  return (
    <List.Item key={item.id} onClick={() => handleClick(item.id)}>
      <List.Content style={{ cursor: "pointer" }}>
        <List.Header style={{ color: item.completed ? "inherit" : "pink" }}>
          {item.name}
        </List.Header>
        <List.Description>{item.quantity}</List.Description>
      </List.Content>
    </List.Item>
  )
}

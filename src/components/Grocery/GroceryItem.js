import React from "react";
import { List } from "semantic-ui-react";

export default ({ item, handleClick }) => {
  return (
    <List.Item key={item.id} onClick={() => handleClick(item.id)}>
      <List.Icon name={item.completed ? "check" : ""} />
      <List.Content>
        <List.Header style={{ color: item.completed ? "teal" : "inherit" }}>
          {item.name}
        </List.Header>
        <List.Description>{item.quantity}</List.Description>
      </List.Content>
    </List.Item>
  );
};

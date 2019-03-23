import React from "react";
import { Card, Button, List } from "semantic-ui-react";

import { useList } from "../App";
import { todoList } from "../../../DummyData";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default () => {
  const { items, addItem, removeCompleted, toggleComplete } = useList(todoList);
  return (
    <Card>
      <Card.Content>
        <Card.Header as="h3">Todo List</Card.Header>
        <List divided relaxed>
          <List.Item>
            <List.Content>
              <TodoForm onSubmit={addItem} />
            </List.Content>
          </List.Item>
          {items && items.length === 0 && (
            <List.Item>
              <List.Content>You have nothing to do :(</List.Content>
            </List.Item>
          )}
          {items &&
            items.length > 0 &&
            items.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleClick={toggleComplete}
              />
            ))}
        </List>
      </Card.Content>
      <Button color="teal" onClick={removeCompleted}>
        Remove Completed Todos
      </Button>
    </Card>
  );
};

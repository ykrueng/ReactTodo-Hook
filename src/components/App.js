import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";

import TodoList from "./Todo/TodoList";
import GroceryList from "./Grocery/GroceryList";

export default function App() {
  return (
    <Container fluid>
      <Header textAlign="center" as="h1">
        React Todo Hook
      </Header>
      <TodoList />
      <GroceryList />
    </Container>
  );
}

// This Custom hook can be moved to a separate file
export function useList(todoList) {
  const [items, setItems] = useState(todoList);

  function addItem(item) {
    setItems([...items, item]);
  }

  function toggleComplete(itemId) {
    setItems(
      items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  }

  function removeCompleted() {
    setItems(items.filter(item => !item.completed));
  }

  return {
    items,
    addItem,
    toggleComplete,
    removeCompleted
  };
}

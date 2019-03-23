import React from "react"
import { Container, Header, Card } from "semantic-ui-react"

import TodoList from "./Todo/TodoList"
import GroceryList from "./Grocery/GroceryList"

export default function App() {
  return (
    <Container fluid>
      <Header textAlign="center" as="h1">
        React Todo Hook
      </Header>
      <Card.Group
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center"
        }}
      >
        <TodoList />
        <GroceryList />
      </Card.Group>
    </Container>
  )
}

import React from "react";
import { Card, Button, List } from "semantic-ui-react";

import { useList } from "../App";
import { groceryList } from "../../../DummyData";
import GroceryForm from "./GroceryForm";
import GroceryItem from "./GroceryItem";

export default () => {
  const { items, addItem, removeCompleted, toggleComplete } = useList(
    groceryList
  );
  return (
    <Card>
      <Card.Content>
        <Card.Header as="h3">Grocery List</Card.Header>
        <List divided relaxed>
          <List.Item>
            <List.Content>
              <GroceryForm onSubmit={addItem} />
            </List.Content>
          </List.Item>
          {items && items.length === 0 && (
            <List.Item>
              <List.Content>You have nothing to buy :(</List.Content>
            </List.Item>
          )}
          {items &&
            items.length > 0 &&
            items.map(item => (
              <GroceryItem
                key={item.id}
                item={item}
                handleClick={toggleComplete}
              />
            ))}
        </List>
      </Card.Content>
      <Button color="instagram" onClick={removeCompleted}>
        Remove Bought Items
      </Button>
    </Card>
  );
};

import React from "react"
import { Card, Button, List } from "semantic-ui-react"

import useList from "../Hooks/useList"
import { groceryList } from "../../../DummyData"
import GroceryForm from "./GroceryForm"
import GroceryItem from "./GroceryItem"

export default () => {
  const { items, addItem, removeCompleted, toggleComplete } = useList(
    groceryList
  )
  const itemsToBuy = items.filter(item => !item.completed)
  const itemsBought = items.filter(item => item.completed)

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
          <List.Item>
            <List.Content>
              <List.Header>Items To Buy</List.Header>
              <List.Description>
                <List.List>
                  {itemsToBuy && itemsToBuy.length === 0 && (
                    <List.Item>
                      <List.Content>You bought everything :)</List.Content>
                    </List.Item>
                  )}
                  {itemsToBuy &&
                    itemsToBuy.length > 0 &&
                    itemsToBuy.map(item => (
                      <GroceryItem
                        key={item.id}
                        item={item}
                        handleClick={toggleComplete}
                      />
                    ))}
                </List.List>
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Bought Items</List.Header>
              <List.Description>
                <List.List>
                  {itemsBought &&
                    itemsBought.length > 0 &&
                    itemsBought.map(item => (
                      <GroceryItem
                        key={item.id}
                        item={item}
                        handleClick={toggleComplete}
                      />
                    ))}
                </List.List>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Button color="instagram" onClick={removeCompleted}>
        Remove Bought Items
      </Button>
    </Card>
  )
}

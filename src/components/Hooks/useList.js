import { useState } from "react"

export default function useList(todoList) {
  const [items, setItems] = useState(todoList)

  function addItem(item) {
    setItems([...items, item])
  }

  function toggleComplete(itemId) {
    setItems(
      items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    )
  }

  function removeCompleted() {
    setItems(items.filter(item => !item.completed))
  }

  return {
    items,
    addItem,
    toggleComplete,
    removeCompleted
  }
}

import React, { useState } from "react";
import { Input } from "semantic-ui-react";

export default ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      name,
      quantity,
      id: Date.now(),
      completed: false
    };
    onSubmit(newItem);
    setName("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        transparent
        style={{ width: "100%" }}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Add a new item"
      />
      <Input
        transparent
        style={{ width: "100%" }}
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        placeholder="Quantity"
        action={{
          icon: "plus",
          content: "add",
          color: "instagram"
        }}
      />
    </form>
  );
};

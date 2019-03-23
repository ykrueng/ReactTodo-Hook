import React, { useState } from "react";
import { Input } from "semantic-ui-react";

export default ({ onSubmit }) => {
  const [task, setTask] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      task,
      id: Date.now(),
      completed: false
    };
    onSubmit(newTask);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        transparent
        style={{ width: "100%" }}
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add a new todo"
        action={{
          icon: "plus",
          content: "add",
          color: "teal"
        }}
      />
    </form>
  );
};

import React, { useState } from "react";
import { toast } from "react-toastify";

export const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://78f11e2348d14a94.mokky.dev/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: todoValue, id: Date.now().toString() }),
      });
      const data = await response.json();
      console.log(data);
      toast("Nice");
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
};

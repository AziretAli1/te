import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Todoitem } from "./Todoitem";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch(
          "https://78f11e2348d14a94.mokky.dev/todos"
        );
        const data = await response.json();
        setTodos(data);
        toast.info("все братан данный келди");
      } catch (error) {
        toast.error(error.message);
      }
    };
    getTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <Todoitem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

import React from "react";
import { toast } from "react-toastify";

export const Todoitem = ({ id, title }) => {
  const handleDeleteTodo = async (newId) => {
    try {
      const response = await fetch(
        `https://78f11e2348d14a94.mokky.dev/todos/${newId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      toast.info("Успешно удален!");
      toast.info("Mars Krasavchic");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <li>
      {title} <button onClick={() => handleDeleteTodo(id)}></button>
    </li>
  );
};

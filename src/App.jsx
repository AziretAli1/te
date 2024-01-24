import { useEffect, useState } from "react";
import { Regictration } from "./components/auth/Regictration";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const newToken = localStorage.getItem("auth");
    setToken(newToken);
  });
  return (
    <div>
      <ToastContainer />
      {token ? (
        <>
          <TodoForm />
          <TodoList />
        </>
      ) : (
        <Regictration />
      )}
    </div>
  );
}

export default App;

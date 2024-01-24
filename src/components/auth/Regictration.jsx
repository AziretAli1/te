import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

export const Regictration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    const newUser = {
      email,
      password,
    };
    event.preventDefault();
    try {
      const response = await fetch(
        "https://78f11e2348d14a94.mokky.dev/register",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      const data = await response.json();
      localStorage.setItem("auth", data.token);
      toast("Wow so easy!");
    } catch (error) {}
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Registration</button>
      </Form>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled("form")`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 5px solid black;
  padding: 40px 20px;

  input {
    width: 100%;
    height: 60px;
    font-size: 24px;
    border-radius: 12px;
    font-weight: 400;
    padding-left: 12px;
  }

  button {
    width: 100%;
    height: 60px;
    background: #028686;
    border-radius: 12px;
    font-size: 24px;
    font-weight: 400;
    border: none;
  }
`;

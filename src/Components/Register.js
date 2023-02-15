import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { attemptRegister } from "../store";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const register = (ev) => {
    try {
      ev.preventDefault();
      dispatch(attemptRegister(credentials));
      navigate("/");
    } catch {
      console.log("Error registering");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={register}>
        <input
          placeholder="username"
          value={credentials.username}
          name="username"
          onChange={onChange}
        />
        <input
          placeholder="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
        <button>Register </button>
      </form>
    </div>
  );
};

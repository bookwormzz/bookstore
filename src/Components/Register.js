import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { attemptRegister } from "../store";

export const Register = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const register = (ev) => {
    ev.preventDefault();
    dispatch(attemptRegister(credentials));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={register}>
        <input
          placeholder='username'
          value={credentials.username}
          name='username'
          onChange={onChange}
        />
        <input
          placeholder='password'
          name='password'
          value={credentials.password}
          onChange={onChange}
        />
        <button>Register </button>
      </form>
      <button>You have an account? Login here!</button>
    </div>
  );
};

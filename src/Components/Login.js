import React, { useState } from "react";
import { attemptLogin } from "../store";
import { useDispatch } from "react-redux";
import { Register } from "./Register";

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [hasRender, setRender] = useState(false);
  const onShow = React.useCallback(() => setRender(true), []);

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const login = (ev) => {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
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
        <button className="btn btn-primary">Login</button>
      </form>
      <button
      className="btn btn-secondary"
      onClick={onShow}>
        You don't have an account? Register here!
      </button>
      {hasRender && <Register />}
    </div>
  );
};

export default Login;

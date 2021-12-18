import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Storage/UserSlice";

import { useSelector } from "react-redux";
import { selectUser } from "../Storage/UserSlice";

import { useHistory } from "react-router-dom";

import Dashboard from "./Dashboard";

import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  // const user = useSelector(selectUser);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    history.push("/dashboard");
  }

  return (
    <div>
      {/* <div>{user ? <Dashboard /> : <Login />}</div> */}
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
} // EO Login

export default Login;

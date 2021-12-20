import React, { useState } from "react";
// MUI
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../Storage/UserSlice";
// Router
import { useHistory } from "react-router-dom";
//CSS
import "../App.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

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
  // pb={{ sx: 5, sm: 5, md: 5 }} py={{ sx: 500, sm: 100, md: 3 }}

  return (
    <div className="App">
      {/* <Container fixed> */}
      <Box
        mx={{ xs: -20, sm: 25, m: 10, lg: 40 }} // Left and Right
        my={{ xs: 10, sm: 10 }} // Top and bottom
      >
        <Paper elevation={3}>
          <Box pt={{ sm: 3 }}>
            <h1>Login</h1>
          </Box>
          <Box pb={{ sm: 5 }}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <br />
              <br />
              <br />
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
      {/* </Container> */}
    </div>
  );
} // EO Login

export default Login;

// import React from "react";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectBookmark, addBookmark } from "../Storage/bookmarkSlice";
import { selectUser } from "../Storage/UserSlice";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomeDashboard() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Container fixed>
        {/* {user ? <h1>Hello {user.name}</h1> : <h1>Hello guest</h1>} */}
        <br />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                {user ? (
                  <h1>Welcome back {user.name}</h1>
                ) : (
                  <h1>Sign in or create an account</h1>
                )}
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default HomeDashboard;

import React from "react";
import { Link, useHistory } from "react-router-dom";
// MUI & Styles
import "../App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Redux and Slices
import { logout, selectUser } from "../Storage/UserSlice";
import { useDispatch, useSelector } from "react-redux";

function Footer() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  }
  return (
    <div>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="primary.main"
        color="white"
      >
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  NT9ON
                </Link>
              </Typography>
              <p>Not the 9 o'clock news</p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Editions</Box>
              <Box pt={{ xs: 2, sm: 2 }}>
                <Link
                  to="/edition/au"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Australia
                </Link>
              </Box>
              <Box pt={{ xs: 1, sm: 1 }}>
                <Link
                  to="/edition/gb"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  United Kingdom
                </Link>
              </Box>
              <Box pt={{ xs: 1, sm: 1 }}>
                <Link
                  to="/edition/us"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  United States
                </Link>
              </Box>
            </Grid>
            {user ? (
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Dashboard</Box>

                <Box pt={{ xs: 1, sm: 1 }}>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Bookmarks
                  </Link>
                </Box>
                <Box pt={{ xs: 1, sm: 1 }}>
                  <Link
                    onClick={(e) => handleLogout(e)}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Logout
                  </Link>
                </Box>
              </Grid>
            ) : (
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Dashboard</Box>
                <Box pt={{ xs: 2, sm: 2 }}>Sign in to view your bookmarks.</Box>

                <Box pt={{ xs: 1, sm: 1 }}>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;

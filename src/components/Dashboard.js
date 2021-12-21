import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Storage/UserSlice";
import { selectBookmark } from "../Storage/bookmarkSlice";
// Router
import { useHistory } from "react-router-dom";
// Components
import Login from "./Login";
import ArticleCard from "./ArticleCard";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Image
import fallback from "../images/fallback.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const bookmark = useSelector(selectBookmark);

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  }

  console.log(bookmark.title);
  return (
    <div>
      {user ? (
        <div>
          <Container fixed>
            {/* {user ? <h1>Hello {user.name}</h1> : <h1>Hello guest</h1>} */}
            <h1>Welcome back {user.name}</h1>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Item pt={2}>
                    <h3>Personal information</h3>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <Button
                      variant="contained"
                      onClick={(e) => handleLogout(e)}
                    >
                      Logout
                    </Button>
                  </Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>Lorem ipsum</Item>
                </Grid>
              </Grid>
            </Box>
            <h1>My bookmarks</h1>

            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {bookmark ? (
                bookmark.map((data) => {
                  const image = data.img === null ? fallback : data.img;
                  return (
                    <Grid item xs={4}>
                      <item>
                        <ArticleCard
                          title={data.title}
                          description={data.description}
                          pubDate={data.published_at}
                          img={image}
                          url={data.url}
                          //   handleBookmarkClick={addBookmark}
                        />
                      </item>
                    </Grid>
                  );
                })
              ) : (
                <p>No bookmarks to see...</p>
              )}
            </Grid>

            {/* {bookmark.title} */}
          </Container>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Dashboard;

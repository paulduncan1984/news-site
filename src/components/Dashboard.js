import React from "react";
// Router
import { useHistory } from "react-router-dom";
// Redux & Slices
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Storage/UserSlice";
import { selectBookmark } from "../Storage/bookmarkSlice";
// Components
import Login from "./Login";
import BookmarkCard from "./BookmarkCard";
// MUI & images
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
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

  return (
    <div>
      {user ? (
        <div>
          <Container fixed>
            <h1>Welcome back {user.name}</h1>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Item pt={2}>
                    <h2>Personal information</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                  </Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>
                    <h2>NT9ON Dashboard</h2>
                    <p>
                      The NT9ON dashboard allows you to manage your personal
                      information and bookmarks.{" "}
                    </p>
                    <Button
                      variant="contained"
                      onClick={(e) => handleLogout(e)}
                    >
                      Logout
                    </Button>
                  </Item>
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
                        <BookmarkCard
                          title={data.title}
                          description={data.description}
                          pubDate={data.published_at}
                          img={image}
                          url={data.url}
                        />
                      </item>
                    </Grid>
                  );
                })
              ) : (
                <p>No bookmarks to see...</p>
              )}

              {bookmark === [] ? (
                <p>You currently have no bookmarks stored.</p>
              ) : (
                <Container fixed>
                  <br />
                  <br />
                  <br />
                  <br />
                </Container>
              )}
            </Grid>
          </Container>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Dashboard;

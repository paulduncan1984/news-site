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
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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

  //   const [bookmarkList, setBookmarkList] = useState({});

  //   setBookmarkList(bookmark);
  //   console.log(bookmarkList);
  //   console.log(bookmark);
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome back {user.name}</h1>
          <button onClick={(e) => handleLogout(e)}>Logout</button>
          <hr />
          <p>Here are your bookmarks:</p> <br />
          <br />
          <br />
          {/* <Container fixed>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {bookmarkList.map((data) => {
                  return (
                    <Grid item xs={4}>
                      <item>
                        <ArticleCard
                          title={data.title}
                          description={data.description}
                          pubDate={data.published_at}
                          img={data.image}
                          url={data.url}
                          //   handleBookmarkClick={addBookmark}
                        />
                      </item>
                    </Grid>
                  );
                })}
              </Grid>
            </Container> */}
          {bookmark.title}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Dashboard;

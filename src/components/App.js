import React, { useState } from "react";
// Components
import ArticleCard from "./ArticleCard";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useDefaultNewsfeed } from "../hooks/api";
import CountryFilter from "./CountryFilter";
import CountryFilterResults from "./CountryFilterResults";
import Login from "./Login";
import NavSearch from "./NavSearch";

// Material UI & Styles
import "../App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Dashboard from "./Dashboard";
// Routes
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addBookmark } from "../Storage/bookmarkSlice";
import { selectBookmark } from "../Storage/bookmarkSlice";

function App() {
  // State for default news feed
  const { article, isLoaded, error, location } = useDefaultNewsfeed();
  // State for bookmarks
  const [bookmarkList, setBookmarkList] = useState({});

  // Bookmark functionality
  const bookmark = useSelector(selectBookmark);
  const dispatch = useDispatch();

  function addBookmark(article) {
    const newBookmarks = [...bookmark, article];
    console.log(newBookmarks);
    // setBookmarkList({ ...newBookmarks });
    // console.log(bookmarkList);
    // dispatch(
    //   addBookmark({
    //     // bookmark: { ...newBookmarks },
    //     bookmark: newBookmarks,
    //   })
    // );
  } // EO Handle Bookmark

  if (error) {
    return <div>Error loading your news stream: {error.message}</div>;
  }

  return (
    <Router>
      <div className="App">
        <div>
          <NavSearch />
        </div>

        <br />
        <br />
        <Container fixed>
          <Route exact path="/">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {isLoaded ? (
                article.map((data) => {
                  return (
                    <Grid item xs={4}>
                      <item>
                        <ArticleCard
                          title={data.title}
                          description={data.description}
                          pubDate={data.published_at}
                          img={data.image}
                          url={data.url}
                          handleBookmarkClick={addBookmark}
                        />
                      </item>
                    </Grid>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </Grid>
          </Route>

          <Route path="/search/:queryText" component={SearchResults} />
          <Route
            path="/edition/:countryCode"
            component={CountryFilterResults}
          />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";
// Components
import ArticleCard from "./ArticleCard";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useDefaultNewsfeed } from "../hooks/api";
import CountryFilter from "./CountryFilter";
import CountryFilterResults from "./CountryFilterResults";
import Login from "./Login";
// Material UI & Styles
import "../App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Dashboard from "./Dashboard";
// Routes
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../Storage/UserSlice";

function App() {
  const user = useSelector(selectUser);

  const { article, isLoaded, error } = useDefaultNewsfeed();

  if (error) {
    return <div>Error loading your news stream: {error.message}</div>;
  }
  return (
    <div className="App">
      <Nav />
      <div>{user ? <Dashboard /> : <Login />}</div>
      <Container fixed>
        <Router>
          <div>
            <br />
            <SearchBar />
            <br />
          </div>
          <div>
            <CountryFilter />
          </div>

          <div>
            <Link to="/login">Login</Link>
          </div>
          <hr />
          <br />

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
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;

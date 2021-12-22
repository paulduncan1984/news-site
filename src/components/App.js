// React, Routes
import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
// Components
import ArticleCard from "./ArticleCard";
import SearchResults from "./SearchResults";
import CountryFilterResults from "./CountryFilterResults";
import Login from "./Login";
import NavSearch from "./NavSearch";
import Dashboard from "./Dashboard";
import BookmarkIcons from "./BookmarkIcons";
import Loading from "./Loading";
// Hooks
import { useDefaultNewsfeed } from "../hooks/api";
// MUI & Styles
import "../App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  const { article, isLoaded, error } = useDefaultNewsfeed();

  if (error) {
    return <div>Error loading your news stream: {error.message}</div>;
  }

  return (
    <Router>
      <div className="App">
        <NavSearch />

        <Box my={{ xs: 10, sm: 5, m: 10, lg: 10 }}>
          <Container fixed>
            <Route exact path="/">
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justify="center"
              >
                {isLoaded ? (
                  article.map((data) => {
                    return (
                      <Grid item xs={4}>
                        <item>
                          <ArticleCard
                            title={data.title}
                            description={data.description}
                            img={data.image}
                            url={data.url}
                            BookmarkIconToggle={BookmarkIcons}
                          />
                        </item>
                      </Grid>
                    );
                  })
                ) : (
                  <Loading />
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
        </Box>
      </div>
    </Router>
  );
}

export default App;

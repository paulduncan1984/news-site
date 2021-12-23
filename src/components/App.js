// React, Routes, pagination
import React, { useState } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactPaginate from "react-paginate";
// Components
import ArticleCard from "./ArticleCard";
import SearchResults from "./SearchResults";
import CountryFilterResults from "./CountryFilterResults";
import Login from "./Login";
import NavSearch from "./NavSearch";
import Dashboard from "./Dashboard";
import BookmarkIcons from "./BookmarkIcons";
import Loading from "./Loading";
import DefaultNewsFeed from "./DefaultNewsFeed";
// Hooks
import { useDefaultNewsfeed } from "../hooks/api";
// MUI & Styles
import "../App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  // const { article, isLoaded, error } = useDefaultNewsfeed(); - possibly delete

  return (
    <Router>
      <div className="App">
        <NavSearch />

        <Box my={{ xs: 10, sm: 5, m: 10, lg: 10 }}>
          <Container fixed>
            <Route exact path="/">
              {/* <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justify="center"
              > */}
              {/* {isLoaded ? (
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
                )} */}

              {/* {displayArticles} */}
              <DefaultNewsFeed />
              {/* </Grid> */}
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

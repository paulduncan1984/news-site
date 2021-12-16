import React, { useEffect, useState } from "react";
// Components
import ArticleCard from "./ArticleCard";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useDefaultNewsfeed } from "../hooks/api";
// Material UI & Styles
import "../App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// Routes
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  const { article, isLoaded, error } = useDefaultNewsfeed();

  if (error) {
    return <div>Error loading your news stream: {error.message}</div>;
  }
  return (
    <div className="App">
      <Nav />
      <Container fixed>
        <Router>
          <div>
            <br />
            <SearchBar />
            <br />
          </div>

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
        </Router>
      </Container>
    </div>
  );
}

export default App;

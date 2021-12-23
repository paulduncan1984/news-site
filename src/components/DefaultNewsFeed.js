// React, Routes, pagination
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
// Components
import ArticleCard from "./ArticleCard";
import BookmarkIcons from "./BookmarkIcons";
import Loading from "./Loading";
// Hooks
import { useDefaultNewsfeed } from "../hooks/api";
// MUI & Styles
import "../App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../App.css";

function DefaultNewsFeed() {
  const { article, isLoaded, error } = useDefaultNewsfeed();

  const [pageNumber, setPageNumber] = useState(0);

  const articlesPerPage = 9;
  const pagesVisited = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(article.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (error) {
    return <div>Error loading your news stream: {error.message}</div>;
  }

  return (
    <div>
      <Box my={{ xs: 10, sm: 5, m: 10, lg: 10 }}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justify="center"
        >
          {isLoaded ? (
            article
              .slice(pagesVisited, pagesVisited + articlesPerPage)
              .map((data) => {
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
        <br />
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </Box>
    </div>
  );
}

export default DefaultNewsFeed;

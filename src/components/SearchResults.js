// React, Routes, pagination
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
// Hooks
import { useMediaStackSearchResults } from "../hooks/api";
// Components
import ArticleCard from "./ArticleCard";
import BookmarkIcons from "./BookmarkIcons";
import Loading from "./Loading";
// Material UI & Styles
import Grid from "@mui/material/Grid";

function SearchResults() {
  const params = useParams();
  const { results, isLoaded, error } = useMediaStackSearchResults(
    params.queryText
  );

  const [pageNumber, setPageNumber] = useState(0);

  const articlesPerPage = 9;
  const pagesVisited = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(results.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (error) {
    return <div>Error loading search results: {error.message}</div>;
  }

  return (
    <div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {isLoaded ? (
          results
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
    </div>
  );
} // EO Search results

export default SearchResults;

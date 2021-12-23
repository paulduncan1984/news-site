// React, Routes, pagination
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
// Components
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
// Material UI & Styles
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// Hooks
import { useCountryFilter } from "../hooks/api";
//Router
import { useParams } from "react-router-dom";

function CountryFilterResults() {
  const params = useParams();

  const { countryResults, error, isLoaded } = useCountryFilter(
    params.countryCode
  );

  const [pageNumber, setPageNumber] = useState(0);

  const articlesPerPage = 9;
  const pagesVisited = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(countryResults.length / articlesPerPage);
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
          countryResults
            .slice(pagesVisited, pagesVisited + articlesPerPage)
            .map((data) => {
              return (
                <Grid item xs={4}>
                  <item>
                    <ArticleCard
                      title={data.title}
                      description={data.description}
                      url={data.url}
                      img={data.image}
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
} // EO CountryFilterResults

export default CountryFilterResults;

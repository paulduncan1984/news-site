// Components
import ArticleCard from "./ArticleCard";
// Material UI & Styles
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useCountryFilter } from "../hooks/api";

import { useParams, useHistory, Link } from "react-router-dom";

function CountryFilterResults() {
  const params = useParams();
  const { countryResults, error, isLoaded } = useCountryFilter(
    params.countryCode
  );

  if (error) {
    return <div>Error loading search results: {error.message}</div>;
  }

  return (
    <div>
      <Container fixed>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {isLoaded ? (
            countryResults.map((data) => {
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
      </Container>
    </div>
  );
} // EO CountryFilterResults

export default CountryFilterResults;

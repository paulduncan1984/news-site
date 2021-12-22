import { useParams } from "react-router-dom";
import { useMediaStackSearchResults } from "../hooks/api";
// Components
import ArticleCard from "./ArticleCard";
import BookmarkIcons from "./BookmarkIcons";
import Loading from "./Loading";
// Material UI & Styles
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function SearchResults() {
  const params = useParams();
  const { results, isLoaded, error } = useMediaStackSearchResults(
    params.queryText
  );

  if (error) {
    return <div>Error loading search results: {error.message}</div>;
  }

  return (
    <div>
      <Container fixed>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {isLoaded ? (
            results.map((data) => {
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
      </Container>
    </div>
  );
} // EO Search results

export default SearchResults;

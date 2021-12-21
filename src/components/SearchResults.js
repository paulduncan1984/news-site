import { useParams, useHistory, Link } from "react-router-dom";
import { useMediaStackSearchResults } from "../hooks/api";
// Components
import ArticleCard from "./ArticleCard";
// Material UI & Styles
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectBookmark, addBookmark } from "../Storage/bookmarkSlice";

function SearchResults() {
  const params = useParams();
  const { results, isLoaded, error } = useMediaStackSearchResults(
    params.queryText
  );

  function addBookmarkFunction(article) {
    const newBookmarks = [...bookmark, article];
    console.log(newBookmarks);
    // setBookmarkList(...newBookmarks); - delete
    dispatch(
      addBookmark({
        // bookmark: [...setBookmarkList],
        bookmark: newBookmarks,
      })
    );
  } // EO Handle Bookmark

  // Bookmark functionality
  const bookmark = useSelector(selectBookmark);
  const dispatch = useDispatch();

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
                      pubDate={data.published_at}
                      img={data.image}
                      handleBookmarkClick={addBookmarkFunction}
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
} // EO Search results

export default SearchResults;

import React, { useState } from "react";
// MUI & images
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkRemoveOutlinedIcon from "@mui/icons-material/BookmarkRemoveOutlined";
import fallback from "../images/fallback.png";
// Redux & slices
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark, selectBookmark } from "../Storage/bookmarkSlice";

/* Purpose of component:
This component is used for displaying bookmarked articles in the Dashboard with the function to remove bookmarls
*/

function BookmarkCard(props) {
  const dispatch = useDispatch();
  const bookmark = useSelector(selectBookmark);

  // Deal with broken images
  const image = props.img === null ? fallback : props.img;

  function handleRemoveBookmark(article) {
    console.log("Remove bookmark");
    const removal = bookmark.filter(
      (favourite) => favourite.title !== article.title
    );
    console.log(removal);
    console.log(bookmark);
    dispatch(
      removeBookmark({
        bookmark: removal,
      })
    );
  } // EO handleRemoveBookmark

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={props.title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          value={props.title}
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <BookmarkRemoveOutlinedIcon
          onClick={() => handleRemoveBookmark(props)}
        />

        <Button size="small" onClick={() => (window.location.href = props.url)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookmarkCard;

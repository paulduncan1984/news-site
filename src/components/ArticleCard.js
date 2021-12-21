import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { addBookmark } from "../Storage/bookmarkSlice";

import fallback from "../images/fallback.png";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Storage/UserSlice";
import { selectBookmark } from "../Storage/bookmarkSlice";

// Components
import Login from "./Login";

function ArticleCard(props) {
  const user = useSelector(selectUser);
  // const bookmark = useSelector(selectBookmark);
  // const [bookmarkList, setBookmarkList] = useState({});

  // const dispatch = useDispatch();

  // function handleBookmark(data) {
  //   // console.log(bookmark);
  //   const newBookmarks = { ...bookmark, data };
  //   console.log(newBookmarks);
  //   setBookmarkList(newBookmarks);
  //   console.log(bookmarkList);
  //   // dispatch(
  //   //   addBookmark({
  //   //     title: props.title,
  //   //     // description: description,
  //   //     // published_at: published_at,
  //   //     // image: image,
  //   //     // url: url,
  //   //   })
  //   // );
  //   // console.log(bookmark);
  // } // EO Handle Bookmark

  // Deal with broken images
  const image = props.img === null ? fallback : props.img;

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
        <BookmarkAddOutlinedIcon
          onClick={() => props.handleBookmarkClick(props)}
        />

        <Button size="small" onClick={() => (window.location.href = props.url)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;

import React from "react";
// MUI & image
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import fallback from "../images/fallback.png";
// Redux & Slices
import { useSelector } from "react-redux";
import { selectUser } from "../Storage/UserSlice";
// Components
import BookmarkIcons from "./BookmarkIcons";

function ArticleCard(props) {
  const user = useSelector(selectUser);

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
        {user ? <BookmarkIcons props={props} /> : null}

        <Button size="small" onClick={() => (window.location.href = props.url)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;

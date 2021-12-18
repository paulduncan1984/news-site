import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

function ArticleCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <button size="small">
          <BookmarkAddOutlinedIcon />
        </button>

        <Button size="small" onClick={() => (window.location.href = props.url)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;

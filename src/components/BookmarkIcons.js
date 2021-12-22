import React, { useState } from "react";
// MUI
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
// Redux & Slices
import { useDispatch, useSelector } from "react-redux";
import { selectBookmark, addBookmark } from "../Storage/bookmarkSlice";

function BookmarkIcons(props) {
  const [toogleOn, setToogleOn] = useState(true);

  const bookmark = useSelector(selectBookmark);
  const dispatch = useDispatch();

  function handleAddBookmark(article) {
    console.log("Add bookmark");
    setToogleOn(false);
    const newBookmarks = [...bookmark, article];
    console.log(newBookmarks);
    dispatch(
      addBookmark({
        bookmark: newBookmarks,
      })
    );
  } // EO AhandleAddBookmark

  return (
    <div>
      {toogleOn === true ? (
        <BookmarkAddOutlinedIcon
          onClick={() => handleAddBookmark(props.props)}
        />
      ) : (
        <BookmarkAddedOutlinedIcon />
      )}
    </div>
  );
}

export default BookmarkIcons;

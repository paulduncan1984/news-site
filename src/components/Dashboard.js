import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Storage/UserSlice";
import { selectBookmark } from "../Storage/bookmarkSlice";
// Router
import { useHistory } from "react-router-dom";
// Components
import Login from "./Login";

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const bookmark = useSelector(selectBookmark);

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  }
  console.log(bookmark);
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome back {user.name}</h1>
          <p>Here are your bookmarks: {bookmark}</p>
          <button onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Dashboard;

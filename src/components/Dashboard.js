import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Storage/UserSlice";

import { useSelector } from "react-redux";
import { selectUser } from "../Storage/UserSlice";

import Login from "./Login";

function Dashboard() {
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  const user = useSelector(selectUser);
  return (
    <div>
      {/* <div>
        {user ? <p>You are signed in</p> : <p>you are not signed in</p>}
      </div>
      <div>
        <h1>Welcome back </h1>
        <button onClick={(e) => handleLogout(e)}>Logout</button>
      </div> */}

      {user ? (
        <div>
          <h1>Welcome back</h1>
          <p>Here are your bookmarks:</p>
          <button onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Dashboard;

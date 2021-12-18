import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Storage/UserSlice";
import { useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();

    dispatch(logout());
  }
  return (
    <div>
      <h1>Welcome back </h1>
      <button onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  );
}

export default Dashboard;

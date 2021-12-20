import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import bookmarkReducer from "./bookmarkSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    bookmark: bookmarkReducer,
  },
});

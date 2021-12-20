import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmark: [1, 2, 3],
  },
  reducers: {
    addBookmark: (state, action) => {
      state.bookmark = action.payload;
    },
    removeBookmark: (state, action) => {
      state.bookmark = state.bookmark;
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export const selectBookmark = (state) => state.bookmark.bookmark;

export default bookmarkSlice.reducer;

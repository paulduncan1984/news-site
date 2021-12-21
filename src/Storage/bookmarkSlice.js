import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    // bookmark: [],

    bookmark: [
      {
        title:
          "Emma Raducanu: British teenager enjoying ‘free swing’ at US Open",
        description:
          "The 18-year-old saw off Stefanie Vogele and will now face Zhang Shuai, who recently beat her at the Silicon Valley Classic",
        img:
          "https://static.independent.co.uk/2021/09/01/08/PRI197273560.jpg?width=1024&auto=webp",
        url:
          "https://www.independent.co.uk/sport/tennis/emma-raducanu-us-open-2021-b1912110.html",
      },
    ],
  },
  reducers: {
    addBookmark: (state, action) => {
      state.bookmark = action.payload.bookmark;
    },
    removeBookmark: (state, action) => {
      state.bookmark = []; // This needs developing
    },
    clearBookmark: (state) => {
      state.bookmark = [];
    },
  },
});

export const {
  addBookmark,
  removeBookmark,
  clearBookmark,
} = bookmarkSlice.actions;

export const selectBookmark = (state) => state.bookmark.bookmark;

export default bookmarkSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const INITIA_STATE = {
  status: "idle",
  list: [],
  errMsg: "",
};

const wallpaperSlice = createSlice({
  name: "wallpaper",
  initialState: INITIA_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default wallpaperSlice.reducer;

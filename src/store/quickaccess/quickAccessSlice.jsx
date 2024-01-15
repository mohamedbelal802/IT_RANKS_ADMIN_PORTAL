import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  status: "idle",
  quickAcess: [],
  errMsg: "",
};

const quickAccessSlice = createSlice({
  name: "quick_access",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {},
});

export default quickAccessSlice.reducer;

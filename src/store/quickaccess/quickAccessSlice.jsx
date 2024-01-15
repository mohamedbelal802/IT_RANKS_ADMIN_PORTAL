import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quickAccessServices from "./quickAccessService";

const INITIAL_STATE = {
  status: "idle",
  list: [],
  errMsg: "",
};

export const getAllQuickAccess = createAsyncThunk(
  "/quick_access/get_all",
  async (_, thunkApi) => {
    try {
      const { data } = await quickAccessServices.getAllQuickAccess();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateQuickAccess = createAsyncThunk(
  "/quick_access/update",
  async ({ title, iconId, systemName }, thunkApi) => {
    try {
      const { data } = quickAccessServices.updateQuickAccess(
        iconId,
        title,
        systemName
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const quickAccessSlice = createSlice({
  name: "quick_access",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuickAccess.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllQuickAccess.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(getAllQuickAccess.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default quickAccessSlice.reducer;

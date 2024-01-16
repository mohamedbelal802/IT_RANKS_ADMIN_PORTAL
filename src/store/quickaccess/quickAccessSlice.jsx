import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quickAccessServices from "./quickAccessService";
import { successToast } from "../../utils/toasts";

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

export const createQuickAccess = createAsyncThunk(
  "/quick_access/create",
  async ({ title, icon, systemName }, thunkApi) => {
    try {
      const { data } = await quickAccessServices.createQuickAccess(
        title,
        systemName,
        icon
      );
      successToast(data);
      thunkApi.dispatch(getAllQuickAccess());
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteQuickAccess = createAsyncThunk(
  "/quick_access/delete",
  async ({ id }, thunkApi) => {
    try {
      const { data } = await quickAccessServices.deleteQuickAccess(id);
      successToast(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateQuickAccess = createAsyncThunk(
  "/quick_access/update",
  async ({ title, icon, id, systemName }, thunkApi) => {
    try {
      const { data } = await quickAccessServices.updateQuickAccess(
        id,
        icon,
        title,
        systemName
      );
      successToast(data);
      thunkApi.dispatch(getAllQuickAccess());
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
        state.list = action.payload;
      })
      .addCase(getAllQuickAccess.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(deleteQuickAccess.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (item) => item.id.toString() === action.meta.arg.id.toString()
        );
      });
  },
});

export default quickAccessSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import announcementService from "./announcementService";
import { successToast } from "../../utils/toasts";

const INITIAL_STATE = {
  status: "idle",
  announcements: [],
  errMsg: "",
};

export const getAllAnnouncement = createAsyncThunk(
  "announcement/get-all",
  async (_, thunkApi) => {
    try {
      const { data } = await announcementService.getAllAnnouncement();
      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createAnnouncment = createAsyncThunk(
  "announcement/create",
  async ({ data }, thunkApi) => {
    try {
      const response = await announcementService.createAnnouncment(data);
      successToast(response.data);
      thunkApi.dispatch(getAllAnnouncement());
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateAnnouncement = createAsyncThunk(
  "announcement/update",
  async ({ id, data }, thunkApi) => {
    try {
      const response = await announcementService.updateAnnouncement(id, data);
      successToast(response.data);
      thunkApi.dispatch(getAllAnnouncement());
      return true;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteAnnouncement = createAsyncThunk(
  "announcement/update",
  async ({ id }, thunkApi) => {
    try {
      const response = await announcementService.deleteAnnouncement(id);
      successToast(response.data);
      thunkApi.dispatch(getAllAnnouncement());
      return true;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const announcementSlice = createSlice({
  name: "announcement",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAnnouncement.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAllAnnouncement.fulfilled, (state, action) => {
        state.status = "success";
        state.announcements = action.payload;
      })
      .addCase(getAllAnnouncement.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(updateAnnouncement.fulfilled, (state, action) => {
        // console.log();
      });
  },
});

export default announcementSlice.reducer;

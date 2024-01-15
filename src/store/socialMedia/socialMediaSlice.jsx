import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import socialMediaService from "./socialMediaService";
import { successToast } from "../../utils/toasts";

const INITIA_STATE = {
  status: "idle",
  socialMedia: [],
  errMsg: "",
};

export const getAllSocialMedia = createAsyncThunk(
  "/social/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await socialMediaService.getAllSocialMedia();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateSocialMedia = createAsyncThunk(
  "/social/update",
  async ({ title, url, id }, thunkApi) => {
    try {
      const response = await socialMediaService.updateSocialMedia(
        title,
        url,
        id
      );
      successToast(response.data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const socialMediaSlice = createSlice({
  name: "social_media",
  initialState: INITIA_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSocialMedia.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllSocialMedia.fulfilled, (state, action) => {
        state.status = "success";
        state.socialMedia = action.payload;
      })
      .addCase(getAllSocialMedia.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(updateSocialMedia.fulfilled, (state, action) => {
        state.socialMedia = state.socialMedia.map((item) =>
          item.id === action.meta.arg.id
            ? { ...item, url: action.meta.arg.url }
            : item
        );
      });
  },
});

export default socialMediaSlice.reducer;

import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import newsService from "./newsService";
import { successToast } from "../../utils/toasts";

const INITIAL_STATE = {
  status: "idle",
  news: [],
  errMsg: "",
};

export const getAllNews = createAsyncThunk(
  "news/get-all",
  async (_, thunkApi) => {
    try {
      const { data } = await newsService.getAllNews();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createNew = createAsyncThunk(
  "news/create",
  async ({ data }, thunkApi) => {
    try {
      const response = await newsService.createNew(data);
      successToast(response.data);
      thunkApi.dispatch(getAllNews());
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteNew = createAsyncThunk(
  "news/delete",
  async ({ id }, thunkApi) => {
    try {
      const response = await newsService.deleteNew(id);
      console.log(response);
      successToast(response.data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.status = "success";
        state.news = action.payload;
      })
      .addCase(getAllNews.rejected, (state, action) => {
        state.status = "error";
        state.errMsg = "Something went wrong";
      })
      .addCase(createNew.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(deleteNew.fulfilled, (state, action) => {
        state.news = state.news.filter(
          (item) => item.id !== action.meta.arg.id
        );
      });
  },
});

export default newsSlice.reducer;

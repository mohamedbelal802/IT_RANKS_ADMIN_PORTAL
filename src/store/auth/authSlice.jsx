import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { successToast, warningToast } from "../../utils/toasts";
import authService from "./authService";
import { api } from "../../utils/api";

const INITIAL_STATE = {
  status: "idle",
  user: null,
  errroMsg: null,
};

export const signIn = createAsyncThunk(
  "user/signin",
  async ({ data, navigate }, thunkApi) => {
    try {
      const response = await authService.login(data);
      console.log("response", response);
      const {
        token: { accessToken, tokenType },
        employee,
        p_user_id,
      } = response.data;
      navigate("/");
      successToast("Successfuly sign in");
      // // Store the token in localStorage
      localStorage.setItem("userToken", `${tokenType} ${accessToken}`);
      localStorage.setItem("Accept-pUserId", `${p_user_id}`);
      api.defaults.headers.common.Authorization = `${tokenType} ${accessToken}`;
      api.defaults.headers.common["Accept-pUserId"] = `${p_user_id}`;
      return { ...response.data, userName: data.userName };
    } catch (error) {
      warningToast(error?.response?.data?.responseMessage);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    signOut: (state) => {
      window.sessionStorage.clear();
      window.localStorage.clear();
      // state = INITIAL_STATE;
      state.user = null;
      state.status = "idle";
      state.errroMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "pending";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload);
        state.user = action.payload;
        state.errroMsg = "";
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "error";
        state.errroMsg = "something wrong";
      });
  },
});

export const { signOut } = userSlice.actions;
export default userSlice.reducer;

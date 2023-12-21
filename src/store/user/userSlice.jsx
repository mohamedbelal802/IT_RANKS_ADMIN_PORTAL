import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { successToast } from "../../utils/toasts";

const INITIAL_STATE = {
  status: "idle",
  user: JSON.parse(localStorage.getItem("user")) || null,
  errroMsg: null,
};

export const signIn = createAsyncThunk(
  "user/signin",
  async ({ data, navigate }, thunkApi) => {
    try {
      let response = new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve("1234");
        }, 1000);
      });
      await response;
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "mohamed", token: 12345 })
      );
      successToast("لقد تم تسجيل الدخول بنجاح");
      navigate("/");
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    signOut: () => window.localStorage.removeItem("user"),
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "pending";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "success";
        state.user = { name: "mohamed", token: action.payload };
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "error";
        state.errroMsg = "something wrong";
      });
  },
});

export const { signOut } = userSlice.actions;
export default userSlice.reducer;

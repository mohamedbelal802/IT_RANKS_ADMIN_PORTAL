import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal/modalSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    user: userSlice,
  },
});

export default store;

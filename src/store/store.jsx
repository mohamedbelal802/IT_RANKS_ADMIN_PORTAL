import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal/modalSlice";
import userSlice from "./auth/authSlice";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import newsSlice from "./news/newsSlice";
import announcementSlice from "./announcements/announcementSlice";
import socialMediaSlice from "./socialMedia/socialMediaSlice";
import quickAccessSlice from "./quickaccess/quickAccessSlice";

const persistConfig = {
  key: "root", // The key to use for storing the data in local storage
  storage: storageSession, // The storage engine to use (localStorage in this case)
  whitelist: ["user"], // The reducers to persist (optional, only persists user and teacher reducers in this example)
};

const rootReducer = combineReducers({
  modal: modalSlice,
  user: userSlice,
  news: newsSlice,
  announcement: announcementSlice,
  social_media: socialMediaSlice,
  quick_access: quickAccessSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // enhancers: [(Reactotron as any).createEnhancer()],
  // devTools: true,
});
export const persistor = persistStore(store);

export default store;

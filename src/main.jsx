import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import TranslationProvider from "./translation/TranslationProvider.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.jsx";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#2171EC1A",
      main: "#377DFF",
      dark: "#377DFF",
    },
    secondary: {
      main: "#fff",
    },
    grey: {
      main: "#919191",
    },
    warning: {
      main: "#D92D20",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <TranslationProvider>
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-left" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </TranslationProvider>
);

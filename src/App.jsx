import { RouterProvider } from "react-router-dom";
import "./styles/app.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { router } from "./navigation/router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

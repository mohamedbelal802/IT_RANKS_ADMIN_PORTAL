import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../protected_routes/PrivateRoute";
import MainLayout from "../../layouts/MainLayout";
import LoadingPage from "../../components/ui/loading/LoadingPage";

const Home = React.lazy(() => import("../../pages/Home"));
const News = React.lazy(() => import("../../pages/News"));
const Announcments = React.lazy(() => import("../../pages/Announcments"));
const SignIn = React.lazy(() => import("../../pages/SignIn"));

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: (
      <React.Suspense fallback={<LoadingPage />}>
        <SignIn />
      </React.Suspense>
    ),
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: (
              <React.Suspense fallback={<LoadingPage />}>
                <Home />
              </React.Suspense>
            ),
          },
          {
            path: "/news",
            element: (
              <React.Suspense fallback={<LoadingPage />}>
                <News />
              </React.Suspense>
            ),
          },
          {
            path: "/announcments",
            element: (
              <React.Suspense fallback={<LoadingPage />}>
                <Announcments />
              </React.Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

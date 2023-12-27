import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../store/news/newsSlice";
import { api } from "../utils/api";
import CreateNewsModal from "../components/ui/modals/CreateNewsModal";
import NewsDetailsModal from "../components/ui/modals/NewsDetailsModal";

export default function MainLayout() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    api.defaults.headers.common.Authorization = `${user?.token.tokenType} ${user?.token.accessToken}`;
    api.defaults.headers.common["Accept-pUserId"] = `${user?.p_user_id}`;
    dispatch(getAllNews());
  }, []);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#F7F7F9" }}>
        <Outlet />
      </main>
      <NewsDetailsModal />
      {/* <NewsModal />
      {/* <CreateAnnouncmentsModal /> */}
      {/* <EditAnnouncmentsModal />
      <SocialModal />
      <QuickAccessModal />
      <WallpaperModal /> */}
      <CreateNewsModal />
    </>
  );
}

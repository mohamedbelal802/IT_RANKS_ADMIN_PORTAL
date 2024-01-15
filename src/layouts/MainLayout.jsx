import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../store/news/newsSlice";
import { api } from "../utils/api";
import CreateNewsModal from "../components/ui/modals/CreateNewsModal";
import NewsDetailsModal from "../components/ui/modals/NewsDetailsModal";
import CreateAnnouncmentsModal from "../components/ui/modals/CreateAnnouncmentsModal";
import { getAllAnnouncement } from "../store/announcements/announcementSlice";
import EditAnnouncmentsModal from "../components/ui/modals/EditAnnouncmentsModal";
import { getAllSocialMedia } from "../store/socialMedia/socialMediaSlice";
import SocialModal from "../components/ui/modals/SocialModal";

export default function MainLayout() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    api.defaults.headers.common.Authorization = `${user?.token.tokenType} ${user?.token.accessToken}`;
    api.defaults.headers.common["Accept-pUserId"] = `${user?.p_user_id}`;
    dispatch(getAllNews());
    dispatch(getAllAnnouncement());
    dispatch(getAllSocialMedia());
  }, []);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#F7F7F9" }}>
        <Outlet />
      </main>
      <CreateNewsModal />
      <NewsDetailsModal />
      <CreateAnnouncmentsModal />
      <EditAnnouncmentsModal />
      <SocialModal />
      {/* <QuickAccessModal />
      <WallpaperModal /> */}
    </>
  );
}

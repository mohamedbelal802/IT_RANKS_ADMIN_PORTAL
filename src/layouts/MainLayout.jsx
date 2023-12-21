import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import NewsModal from "../components/ui/modals/CreateNewsModal";
import NewsDetails from "../components/ui/modals/NewsDetailsModal";
import CreateAnnouncmentsModal from "../components/ui/modals/CreateAnnouncmentsModal";
import EditAnnouncmentsModal from "../components/ui/modals/EditAnnouncmentsModal";
import SocialModal from "../components/ui/modals/SocialModal";
import QuickAccessModal from "../components/ui/modals/QuickAccessModal";
import WallpaperModal from "../components/ui/modals/WallpaperModal";
import PrivateRoute from "../navigation/protected_routes/PrivateRoute";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#F7F7F9" }}>
        <Outlet />
      </main>
      <NewsModal />
      <NewsDetails />
      <CreateAnnouncmentsModal />
      <EditAnnouncmentsModal />
      <SocialModal />
      <QuickAccessModal />
      <WallpaperModal />
    </>
  );
}

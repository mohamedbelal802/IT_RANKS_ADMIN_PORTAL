import React from "react";
import BannerSection from "../components/home/BannerSection";
import SpecialNewsSection from "../components/home/SpecialNewsSection";
import AnnouncementsSection from "../components/home/AnnouncementsSection";
import SocialSection from "../components/home/SocialSection";
import QuickAccess from "../components/home/QuickAccess";
import WallpapersSection from "../components/home/WallpapersSection";

export default function Home() {
  return (
    <>
      <BannerSection />
      <SpecialNewsSection />
      <AnnouncementsSection />
      <SocialSection />
      <QuickAccess />
      <WallpapersSection />
    </>
  );
}

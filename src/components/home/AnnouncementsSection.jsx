import React from "react";
import MainSection from "../ui/sections/MainSection";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { announcementsConfig } from "../../utils/config";
import AnnouncementCard from "../ui/cards/AnnouncementCard";

export default function AnnouncementsSection() {
  const [t] = useTranslation("global");

  const cardList = announcementsConfig.map((item, index) => (
    <SwiperSlide key={index}>
      <AnnouncementCard image={item.image} date={item.date} />
    </SwiperSlide>
  ));
  return (
    <MainSection name={"announcements"}>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "17px 20px",
            borderRadius: "9px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "700" }}
              variant="h5"
            >
              {t("home.special_announcements.title")}
            </Typography>

            <Link to="/announcments" style={{ color: "#377DFF" }}>
              {t("home.special_news.more")}
            </Link>
          </Box>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            breakpoints={{
              520: {
                slidesPerView: 2,
              },
              996: {
                slidesPerView: 3,
              },
            }}
            dir="ltr"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ marginTop: "10px" }}
          >
            {cardList}
          </Swiper>
        </Box>
      </Container>
    </MainSection>
  );
}

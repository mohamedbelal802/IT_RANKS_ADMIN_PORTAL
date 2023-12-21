import React from "react";
import MainSection from "../ui/sections/MainSection";
import { Box, Container, Typography } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { specialNewsConfig } from "../../utils/config";
import SpecialNewsCard from "../ui/cards/SpecialNewsCard";
import { Link } from "react-router-dom";

export default function SpecialNewsSection() {
  const [t] = useTranslation("global");

  const cardList = specialNewsConfig.map((item, index) => (
    <SwiperSlide key={index}>
      <SpecialNewsCard
        index={index}
        image={item.image}
        title={item.title}
        description={item.description}
        date={item.date}
      />
    </SwiperSlide>
  ));
  return (
    <MainSection name={"special-news"}>
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
              {t("home.special_news.title")}
            </Typography>

            <Link to="/news" style={{ color: "#377DFF" }}>
              {t("home.special_news.more")}
            </Link>
          </Box>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            breakpoints={{
              520: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              996: { slidesPerView: 4 },
            }}
            dir="ltr"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ marginTop: "10px", padding: "10px 0px" }}
          >
            {cardList}
          </Swiper>
        </Box>
      </Container>
    </MainSection>
  );
}

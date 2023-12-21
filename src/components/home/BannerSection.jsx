import { Box, Container } from "@mui/material";
import React from "react";
import MainSection from "../ui/sections/MainSection";
import BannerNewsCard from "../ui/cards/BannerNewsCard";
import BannerAnnouncementCard from "../ui/cards/BannerAnnouncementCard";

export default function BannerSection() {
  return (
    <MainSection name={"home"}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: "15px",
          }}
        >
          <BannerAnnouncementCard />
          <BannerNewsCard />
        </Box>
      </Container>
    </MainSection>
  );
}

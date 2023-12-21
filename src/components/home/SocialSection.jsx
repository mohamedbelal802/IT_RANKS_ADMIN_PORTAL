import React from "react";
import MainSection from "../ui/sections/MainSection";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { socialConfig } from "../../utils/config";
import SocialCard from "../ui/cards/SocialCard";

export default function SocialSection() {
  const [t] = useTranslation("global");

  const cardList = socialConfig.map((item, index) => (
    <Grid key={index} item xs={12} md={6} lg={4}>
      <SocialCard name={item.name} icon={item.icon} href={item.href} />
    </Grid>
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
          <Typography sx={{ fontSize: "16px", fontWeight: "700" }} variant="h5">
            {t("home.social.title")}
          </Typography>
          <Grid marginTop={"10px"} container spacing={2}>
            {cardList}
          </Grid>
        </Box>
      </Container>
    </MainSection>
  );
}

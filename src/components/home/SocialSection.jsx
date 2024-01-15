import React from "react";
import MainSection from "../ui/sections/MainSection";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { socialConfig } from "../../utils/config";
import SocialCard from "../ui/cards/SocialCard";
import { useSelector } from "react-redux";
import Loader from "../ui/loading/Loader";

export default function SocialSection() {
  const { list, status } = useSelector((state) => state.social_media);
  const [t] = useTranslation("global");

  const cardList = list.map((item) => (
    <Grid key={item.id} item xs={12} md={6} lg={4}>
      <SocialCard
        name={socialConfig[item.id].name}
        icon={socialConfig[item.id].icon}
        href={item.url}
        id={item.id}
      />
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

          {status === "pending" ? (
            <Loader />
          ) : (
            <Grid marginTop={"10px"} container spacing={2}>
              {cardList}
            </Grid>
          )}
        </Box>
      </Container>
    </MainSection>
  );
}

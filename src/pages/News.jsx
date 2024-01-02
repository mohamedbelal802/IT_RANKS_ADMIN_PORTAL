import React from "react";
import MainSection from "../components/ui/sections/MainSection";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import SpecialNewsCard from "../components/ui/cards/SpecialNewsCard";
import { useSelector } from "react-redux";
import Loader from "../components/ui/loading/Loader";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function News() {
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const { news, status } = useSelector((state) => state.news);
  const cardList = news.map((item, index) => (
    <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
      <SpecialNewsCard
        image={item.image}
        id={item.id}
        title={item.title}
        endDate={item.endDate}
        startDate={item.startDate}
        content={item.content}
        status={item.status}
      />
    </Grid>
  ));

  return (
    <MainSection name={"news-list"}>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "17px 20px",
            borderRadius: "9px",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "700" }}
              variant="h5"
            >
              {t("news.all_news")}
            </Typography>
            <IconButton onClick={() => navigate("/")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1 13L13 1M1 1L13 13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </Box>

          <Box sx={{ minHeight: "60vh" }}>
            {status === "pending" ? (
              <Loader />
            ) : (
              <Grid marginTop={"10px"} container spacing={2}>
                {cardList}
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </MainSection>
  );
}

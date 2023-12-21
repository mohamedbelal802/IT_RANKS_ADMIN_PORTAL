import React from "react";
import MainSection from "../components/ui/sections/MainSection";
import { Box, Container, Grid, Typography } from "@mui/material";
import { specialNewsConfig } from "../utils/config";
import SpecialNewsCard from "../components/ui/cards/SpecialNewsCard";

export default function News() {
  const cardList = specialNewsConfig.map((item, index) => (
    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
      <SpecialNewsCard
        image={item.image}
        title={item.title}
        index={index}
        description={item.description}
        date={item.date}
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
          <Typography sx={{ fontSize: "16px", fontWeight: "700" }} variant="h5">
            كل الاخبار الخاصه
          </Typography>

          <Grid marginTop={"10px"} container spacing={2}>
            {cardList}
          </Grid>
        </Box>
      </Container>
    </MainSection>
  );
}

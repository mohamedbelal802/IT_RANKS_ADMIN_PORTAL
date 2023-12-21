import React from "react";
import MainSection from "../ui/sections/MainSection";
import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { wallpapersConfig } from "../../utils/config";
import WallpaperCard from "../ui/cards/WallpaperCard";

import addIcon from "../../assets/icons/secondary-add.svg";
import { useNavigate } from "react-router-dom";

export default function WallpapersSection() {
  const [t] = useTranslation("global");
  const navigate = useNavigate();

  const cardList = wallpapersConfig.map((wallpaper, index) => (
    <WallpaperCard key={index} wallpaper={wallpaper} />
  ));

  const handleOpen = () => navigate("?wallpaper=true");
  return (
    <MainSection name={"wallpaper"}>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "17px 20px",
            borderRadius: "9px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "700" }} variant="h5">
            {t("home.wallpapers.title")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "12px 10px",
              backgroundColor: "#FAFAFC",
              gap: "24px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            {cardList}

            <Button
              variant="contained"
              color="primary"
              sx={{
                display: "flex",
                padding: "12px",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={handleOpen}
            >
              <CardMedia
                component={"i"}
                image={addIcon}
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundSize: "contain",
                }}
              />
              <Typography sx={{ fontWeight: "400" }}>اضافة خلفيه</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </MainSection>
  );
}

import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import bg1 from "../../../assets/image/cardBg1.png";
import bg2 from "../../../assets/image/cardBg2.png";
import icon from "../../../assets/image/cardIcon2.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function BannerAnnouncementCard() {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const handleOpenClick = () => navigate("?announcements=true");

  return (
    <Card
      sx={{
        width: "100%",
        position: "relative",
        padding: {
          xs: "20px 20px 10px",
          md: "29px 32px 20px",
        },
        background: "linear-gradient(180deg, #6172FE 0%, #0016C3 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component={"img"}
        image={bg1}
        sx={{
          top: "0px",
          left: "-38px",
          width: "fit-content",
          height: "fit-content",
          backgroundSize: "contain",
          position: "absolute",
          objectFit: "contain",
        }}
      />
      <CardMedia
        component={"img"}
        image={bg2}
        sx={{
          bottom: "0px",
          left: "55px",
          width: "fit-content",
          height: "fit-content",
          backgroundSize: "contain",
          position: "absolute",
          objectFit: "contain",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: "800",
            marginBottom: "12px",
          }}
        >
          {t("home.banner_announcements_card.title")}
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            marginBottom: "15px",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {t("home.banner_announcements_card.description")}
        </Typography>

        <Button
          onClick={handleOpenClick}
          sx={{
            padding: "6px 35px",
            marginTop: "auto",
            borderRadius: "6px",
            fontWeight: "600",
          }}
          variant="contained"
          color="secondary"
        >
          {t("home.banner_announcements_card.btn")}
        </Button>
      </Box>

      <CardMedia
        component={"img"}
        image={icon}
        sx={{
          width: { xs: "86px", md: "179px" },
          height: { xs: "100px", md: "139px" },
          objectFit: "contain",
          zIndex: "2",
        }}
      />
    </Card>
  );
}

import React from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import langIcon from "../../assets/auth/lang.svg";
import { useTranslation } from "react-i18next";
export default function LangToggler() {
  const [t, i18n] = useTranslation("global");

  const handleLanguageCahange = () => {
    document.dir = i18n.language === "en" ? "rtl" : "ltr";
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  return (
    <Box
      onClick={handleLanguageCahange}
      sx={{
        display: "flex",
        zIndex: "20",
        gap: "11px",
        position: "fixed",
        left: {
          xs: "unset",
          md: "40px",
        },
        alignSelf: "start",
        top: {
          xs: "30px",
          md: "40px",
        },
        alignItems: "center",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#1D2D44",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component={"i"}
        image={langIcon}
        style={{ width: "24px", height: "24px", color: "white" }}
      />
      <Typography sx={{ color: "white", fontSize: "14px" }}>
        {i18n.language === "en" ? "AR" : "EN"}
      </Typography>
    </Box>
  );
}

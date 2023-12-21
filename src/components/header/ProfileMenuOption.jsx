import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  DialogTitle,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import closeIcon from "../../assets/icons/close.svg";
import { useTranslation } from "react-i18next";

import profileIcon from "../../assets/icons/profile.svg";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function ProfileMenuOption({ handleClose }) {
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [lang, setLang] = useState(i18n.language);

  const handleLanguageCahange = (lang) => {
    console.log(lang);
    document.dir = lang === "en" ? "ltr" : "rtl";
    i18n.changeLanguage(lang);
  };

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };
  return (
    <Card
      sx={{
        position: { xs: "fixed", md: "absolute" },
        right: {
          xs: "50%",
          md: document.dir === "rtl" ? "0px" : "revert-layer",
        },
        top: { xs: "50%", md: "130%" },
        transform: { xs: "translate(50%,-50%)", md: "translate(0,0)" },
        padding: "15px 25px",
        zIndex: "8",
        minWidth: {
          xs: "90%",
          sm: "380px",
          md: "600px",
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <DialogTitle
          sx={{
            m: 0,
            px: 2,
            padding: "0px",
            fontWeight: "600",
            fontSize: "20px",
            color: "#3D3F65",
          }}
          id="customized-dialog-title"
        >
          {t("home.profile_menu.title")}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CardMedia
            component={"i"}
            image={closeIcon}
            sx={{ width: "24px", height: "24px", backgroundSize: "contain" }}
          />
        </IconButton>
      </Box>

      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            {t("home.profile_menu.lang")}
          </Typography>

          <Button
            color="primary"
            variant="outlined"
            disabled={i18n.language === "ar"}
            sx={{ fontSize: "14px", fontWeight: "400" }}
            onClick={() => handleLanguageCahange("ar")}
            value="ar"
            aria-label="ar"
          >
            العربيه
          </Button>
          <Button
            color="primary"
            variant="outlined"
            disabled={i18n.language === "en"}
            sx={{ fontSize: "14px", fontWeight: "400" }}
            onClick={() => handleLanguageCahange("en")}
            value="en"
            aria-label="en"
          >
            English
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "#F9F9FB",
            marginTop: "16px",
            borderRadius: "10px",
            padding: "16px 12px",
          }}
        >
          <Box sx={{ display: "flex", gap: "15px" }}>
            <CardMedia
              component={"i"}
              image={profileIcon}
              sx={{
                width: {
                  xs: "40px",
                  md: "53px",
                },
                aspectRatio: "1/1",
                backgroundSize: "contain",
                borderRadius: "50%",
              }}
            />

            <div>
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                عمر احمد الالفي
              </Typography>

              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#4E5D78",
                  fontSize: { xs: "10px", md: "14px" },
                }}
              >
                مصمم منتجات رقميه
              </Typography>
            </div>
          </Box>

          <Button
            color="primary"
            variant="contained"
            fullWidth={true}
            onClick={handleSignOut}
            sx={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: { md: "12px" },
              borderRadius: "8px",
              fontWeight: "700",
            }}
          >
            {t("home.profile_menu.logout_btn")}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M14.25 9V5.25C14.25 4.65326 14.0129 4.08097 13.591 3.65901C13.169 3.23705 12.5967 3 12 3H6C5.40326 3 4.83097 3.23705 4.40901 3.65901C3.98705 4.08097 3.75 4.65326 3.75 5.25V18.75C3.75 19.3467 3.98705 19.919 4.40901 20.341C4.83097 20.7629 5.40326 21 6 21H12C12.5967 21 13.169 20.7629 13.591 20.341C14.0129 19.919 14.25 19.3467 14.25 18.75V15M17.25 15L20.25 12M20.25 12L17.25 9M20.25 12H7.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

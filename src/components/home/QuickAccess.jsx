import React from "react";
import MainSection from "../ui/sections/MainSection";
import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { quickAccessConfig, quickAccessDefultConfig } from "../../utils/config";
import QuickAccessCard from "../ui/cards/QuickAccessCard";

import addIcon from "../../assets/icons/secondary-add.svg";
import { useNavigate } from "react-router-dom";

export default function QuickAccess() {
  const [t] = useTranslation("global");
  const navigate = useNavigate();

  const cardList = quickAccessConfig.map((item, index) => {
    const icon = quickAccessDefultConfig.find((it) => it.id === item.iconId);
    return (
      <div
        key={index}
        onClick={() => navigate("?quickaccess=true", { state: item })}
      >
        <QuickAccessCard
          key={index}
          icon={icon.icon}
          background={icon.background}
        />
      </div>
    );
  });

  return (
    <MainSection name={"quick-access"}>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "17px 20px",
            borderRadius: "9px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "700" }} variant="h5">
            {t("home.quick_access.title")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              padding: "16px 32px 16px 32px",
              backgroundColor: "#FAFAFC",
              border: "1px solid #D9D9D9",
              marginTop: "16px",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: { xs: "30px", md: "54px" },
                rowGap: "15px",
                borderRadius: "10px",
                flexWrap: "wrap",
              }}
            >
              {cardList}
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                marginRight: "auto",
                alignSelf: "flex-start",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  display: "flex",
                  padding: "12px",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={() => navigate("?quickaccess=true")}
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
                <Typography sx={{ fontWeight: "400", textWrap: "nowrap" }}>
                  اضافة نظام
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </MainSection>
  );
}

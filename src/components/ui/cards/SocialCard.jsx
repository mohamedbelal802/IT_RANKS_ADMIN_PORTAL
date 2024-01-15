import React from "react";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

import addIcon from "../../../assets/icons/add.svg";
import editIcon from "../../../assets/icons/secondary-edit.svg";
import { useNavigate } from "react-router-dom";

export default function SocialCard({ icon, name, href, id }) {
  const navigate = useNavigate();

  const handleOpen = () =>
    navigate("?social=true", { state: { icon, name, href, id } });
  return (
    <Card
      style={{
        display: "flex",
        padding: "21px 31px 21px 12px",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px",
        border: "1px solid #D9D9D9",
        backgroundColor: "#FAFAFC",
        boxShadow: "none",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box
          sx={{
            padding: "4px 10px",
            borderRadius: "4px",
            backgroundColor: "#19353D",
          }}
        >
          <CardMedia
            component={"i"}
            image={icon}
            sx={{
              backgroundSize: "contain",
              width: "19px",
              height: "19px",
            }}
          />
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "600", lineHeight: "normal" }}
          >
            {name}
          </Typography>
          {href && (
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "normal",
                color: "#617696",
              }}
            >
              {href}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {href ? (
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#2171EC",
              fontSize: "16px",
              fontWeight: "400",
            }}
            onClick={handleOpen}
          >
            <CardMedia
              component={"i"}
              sx={{ width: "24px", height: "24px", backgroundSize: "contain" }}
              image={editIcon}
            />
            تعديل
          </Button>
        ) : (
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#15AF93",
              fontSize: "16px",
              fontWeight: "400",
            }}
            onClick={handleOpen}
          >
            <CardMedia
              component={"i"}
              sx={{ width: "24px", height: "24px", backgroundSize: "contain" }}
              image={addIcon}
            />
            اضافة عنوان
          </Button>
        )}
      </Box>
    </Card>
  );
}

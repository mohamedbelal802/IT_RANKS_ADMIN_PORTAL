import React from "react";
import { Box, CardMedia, IconButton } from "@mui/material";
import deleteIcon from "../../../assets/icons/delete.svg";
import { useNavigate } from "react-router-dom";
export default function WallpaperCard({ wallpaper }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100px",
        height: "70px",
        borderRadius: "4px",
        overflow: "hidden",
        position: "relative",
      }}
      className="special-news-card"
    >
      <CardMedia
        component={"img"}
        sx={{ width: "100%", height: "100%" }}
        image={wallpaper}
      />
      <div
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#383C404D",
          backdropFilter: "blur(3px)",
          opacity: 0,
          transition: "0.3s",
        }}
        className="card-layer"
      >
        <IconButton
          onClick={() =>
            navigate("?wallpaper=true", { state: { image: wallpaper } })
          }
        >
          <CardMedia
            component={"i"}
            sx={{
              width: "24px",
              height: "24px",
              backgroundImage: "contain",
            }}
            image={deleteIcon}
          />
        </IconButton>
      </div>
    </Box>
  );
}

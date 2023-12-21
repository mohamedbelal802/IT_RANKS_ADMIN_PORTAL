import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import editIcon from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import { useNavigate } from "react-router-dom";

export default function SpecialNewsCard({
  index,
  image,
  title,
  description,
  date,
}) {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const handleClickOpen = () => navigate(`?details=true&id=${index}`);

  const handleEditOpen = () => navigate(`?modal=true&id=${index}`);

  return (
    <>
      <Card
        sx={{ width: "100%", backgroundColor: "#F6F6F6", boxShadow: "none" }}
      >
        <Box
          className="special-news-card"
          sx={{ height: "160px", width: "100%", position: "relative" }}
        >
          <CardMedia
            component="img"
            alt="speical new image"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            image={image}
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
            <IconButton>
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
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                height: "30px",
                backgroundColor: "white",
                alignSelf: "auto",
                margin: "5px 20px",
              }}
              flexItem
            />
            <IconButton onClick={handleEditOpen}>
              <CardMedia
                component={"i"}
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundImage: "contain",
                }}
                image={editIcon}
              />
            </IconButton>
          </div>
        </Box>
        <CardContent sx={{ padding: "12px 9px" }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "700", color: "#4E5D78" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#617696" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            paddingTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={handleClickOpen}
            size="small"
            sx={{ fontSize: "14px", fontWeight: "500" }}
          >
            {t("home.special_news.details")}
          </Button>
          <Typography sx={{ fontSize: "14px", color: "#617696" }}>
            {date}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

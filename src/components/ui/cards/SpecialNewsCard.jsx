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
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import editIcon from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import { useNavigate } from "react-router-dom";
import Alert from "../modals/Alert";
import { useDispatch } from "react-redux";
import { deleteNew } from "../../../store/news/newsSlice";

export default function SpecialNewsCard({
  image,
  startDate,
  endDate,
  id,
  content,
  title,
  status,
}) {
  const [alertOpen, setAlertOpen] = useState(false);
  const [t] = useTranslation("global");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickOpen = () => navigate(`?details=true&id=${id}`);

  const handleEditOpen = () => navigate(`?modal=true&id=${id}`);

  const handleAlertOpen = () => setAlertOpen(true);

  const onDeleteSubmit = async () => {
    await dispatch(deleteNew({ id }));
    setAlertOpen(false);
  };

  const date = new Date(startDate);

  // Define the options for formatting
  const options = {
    weekday: "long", // Display the full name of the day of the week
    day: "numeric", // Display the day of the month
    month: "long", // Display the full name of the month
  };

  // Format the date
  const formattedDate = date.toLocaleDateString(
    document.dir === "ltr" ? "en-US" : "ar-EG",
    options
  );

  return (
    <>
      {alertOpen && (
        <Alert
          open={alertOpen}
          handleClose={() => setAlertOpen(false)}
          title={t("home.banner_news_card.alert_delete_title")}
          text={t("home.banner_news_card.alert_delete_text")}
          onSubmit={onDeleteSubmit}
        />
      )}

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
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            image={`data:image/png;base64,${image}`}
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
            <IconButton onClick={handleAlertOpen}>
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
            {content}
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
            {formattedDate}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

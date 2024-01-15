import React from "react";
import { Backdrop, Button, CardMedia, Typography } from "@mui/material";
import profileIcon from "../../assets/icons/profile.svg";
import arrowIcon from "../../assets/icons/chevron-down.svg";
import ProfileMenuOption from "./ProfileMenuOption";
import { useSelector } from "react-redux";

export default function ProfileMenu() {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <Button onClick={handleOpen} sx={{ display: "flex", gap: "15px" }}>
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

          <Typography
            sx={{
              fontWeight: "700",
              color: "#000",
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            {user?.employee?.disp_NAME}
          </Typography>

          <CardMedia
            component={"i"}
            image={arrowIcon}
            sx={{
              width: {
                xs: "18px",
                md: "24px",
              },
              aspectRatio: "1/1",
              backgroundSize: "contain",
            }}
          />
        </Button>
        {open && <ProfileMenuOption handleClose={handleClose} />}
      </div>

      <Backdrop
        sx={{
          color: "#fff",
          backgroundColor: "#2525252B",
        }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
    </>
  );
}

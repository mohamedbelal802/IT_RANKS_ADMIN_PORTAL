import { Backdrop, Button, CardMedia } from "@mui/material";
import React from "react";
import arrowDown from "../../assets/icons/chevron-down.svg";
import LogoChangerCard from "./LogoChangerCard";

export default function LogoChanger() {
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
        <Button
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <CardMedia
            component={"i"}
            image={arrowDown}
            sx={{ width: "24px", height: "24px" }}
          />

          <CardMedia
            component={"i"}
            image="/public/itranks2.svg"
            sx={{
              width: { xs: "48px", md: "68px" },
              height: { xs: "56px", md: "76px" },
              backgroundSize: "contain",
            }}
          />
        </Button>
        {open && <LogoChangerCard handleClose={handleClose} />}
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

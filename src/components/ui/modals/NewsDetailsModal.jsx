import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

import closeIcon from "../../../assets/icons/close.svg";
import { CardMedia } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { specialNewsConfig } from "../../../utils/config";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function NewsDetailsModal() {
  let [searchParams, setSearchParams] = useSearchParams();
  const open = searchParams.get("details") ? true : false;
  const id = searchParams.get("id");
  const data = specialNewsConfig[id];
  const handleClose = () => setSearchParams("");
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      maxWidth={"md"}
      fullWidth={true}
      open={open}
    >
      <Button
        aria-label="close"
        onClick={handleClose}
        color="secondary"
        variant="contained"
        sx={{
          width: "35px",
          height: "35px",
          minWidth: "unset",
          position: "absolute",
          left: "8px",
          top: "8px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          padding: "0px",
        }}
      >
        <CardMedia
          component={"i"}
          image={closeIcon}
          sx={{ width: "24px", height: "24px", backgroundSize: "contain" }}
        />
      </Button>
      <CardMedia
        component={"img"}
        sx={{
          width: "100%",
          aspectRatio: "2/1",
          objectFit: "cover",
        }}
        image={data?.image}
      />
      <DialogContent dividers sx={{ borderTop: "0px" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "18px", md: "24px" },
            color: "#4E5D78",
            fontWeight: "700",
            lineHeight: "24px",
          }}
        >
          {data?.title}
        </Typography>
        <Typography
          sx={{ color: "#2171EC", fontSize: "14px", margin: "16px 0px" }}
        >
          {data?.date}
        </Typography>
        <Typography
          sx={{ fontSize: "18px", color: "#617696", fontWeight: "400" }}
        >
          {data?.description}
        </Typography>
      </DialogContent>
    </BootstrapDialog>
  );
}

import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import closeIcon from "../../assets/icons/close.svg";
import { useTranslation } from "react-i18next";
import FileUpload from "../ui/inputs/FileUpload";

import editIcon from "../../assets/icons/edit.svg";
import { useFormik } from "formik";

export default function LogoChangerCard({ handleClose }) {
  const [t] = useTranslation("global");
  const formik = useFormik({
    initialValues: {
      logo: "",
    },
    onSubmit: (values) => saveLogoHandler(values),
  });

  const saveLogoHandler = (data) => {
    console.log(data);
  };

  return (
    <Card
      sx={{
        position: { xs: "fixed", md: "absolute" },
        left: {
          xs: "50%",
          md: document.dir === "ltr" ? "unset" : "0px",
        },
        right: {
          md: document.dir === "ltr" ? "0px" : "unset",
        },
        top: { xs: "50%", md: "130%" },
        transform: { xs: "translate(-50%,-50%)", md: "translate(0,0)" },
        padding: "15px 25px",
        zIndex: "8",
        minWidth: {
          xs: "90%",
          sm: "380px",
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
          {t("home.logo_modal.title")}
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
            sx={{ width: "24px", height: "24px" }}
          />
        </IconButton>
      </Box>

      <FileUpload setFile={formik.setFieldValue} name={"logo"}>
        {formik.values.logo ? (
          <Box
            sx={{
              width: "134px",
              height: "134px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              position: "relative",
            }}
          >
            <CardMedia
              component={"img"}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "contain",
              }}
              image={
                formik.values.logo.length > 0
                  ? URL.createObjectURL(formik.values.logo[0])
                  : formik.values.logo
              }
            />

            <label
              style={{
                position: "absolute",
                bottom: "0px",
                right: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#377DFF",
              }}
              htmlFor="file"
            >
              <CardMedia
                component={"i"}
                image={editIcon}
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundSize: "contian",
                }}
              />
            </label>
          </Box>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                {t("home.logo_modal.placeholder")}
              </Typography>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "underline",
                }}
                htmlFor="file"
              >
                {t("home.logo_modal.browse")}
              </label>
            </div>
          </>
        )}
      </FileUpload>

      <Box sx={{ marginTop: "20px", display: "flex", gap: "15px" }}>
        <Button variant="contained" color="primary">
          {t("home.logo_modal.confirm_btn")}
        </Button>
        <Button onClick={handleClose} variant="outlined" color="warning">
          {t("home.logo_modal.discard_btn")}
        </Button>
      </Box>
    </Card>
  );
}

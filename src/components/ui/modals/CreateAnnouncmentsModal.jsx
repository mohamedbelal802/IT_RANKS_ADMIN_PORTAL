import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";

import { Box, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as yup from "yup";
import FileUpload from "../inputs/FileUpload";

import closeIcon from "../../../assets/icons/close.svg";
import imageIcon from "../../../assets/icons/image2.svg";
import { useSearchParams } from "react-router-dom";
import DatePicker from "./DatePicker";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const validationsForm = yup.object({
  image: yup.string().required("Required"),
  date: yup.object().shape({
    startDate: yup.string().required(),
    endDate: yup.string().required(),
  }),
});

export default function CreateAnnouncmentsModal() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [datePicker, setDatePicker] = React.useState(false);
  const [t] = useTranslation("global");
  const open = searchParams.get("announcements") ? true : false;

  const formik = useFormik({
    initialValues: {
      image: "",
    },
    validationSchema: validationsForm,
    validateOnMount: true,
  });

  const handleClose = () => {
    setSearchParams("");
    formik.setValues({ image: "" });
  };
  const removeImg = (e) => {
    formik.setFieldValue("image", "");
  };

  const handleDatePickerOpen = () => {
    setDatePicker(true);
  };
  const handleDatePickerClose = () => {
    setDatePicker(false);
  };

  const onSaveWithPost = () => {
    handleDatePickerClose();
    handleClose();
    console.log(formik.values);
  };

  const onSaveWithOutPost = () => {
    handleClose();
    console.log(formik.values);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        fullWidth={true}
        maxWidth={"md"}
        open={open}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, fontSize: "28px" }}
            id="customized-dialog-title"
          >
            {t("home.banner_announcements_card.modal.title")}
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
        <form onSubmit={formik.handleSubmit}>
          <DialogContent dividers>
            <FileUpload
              sx={{
                aaspectRatio: "unset",
                height: "329px",
                backgroundColor: "#F5F5F5",
              }}
              name={"image"}
              setFile={formik.setFieldValue}
            >
              {formik.values.image ? (
                <Box
                  sx={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <IconButton
                    aria-label="close"
                    onClick={removeImg}
                    sx={{
                      position: "absolute",
                      top: "8px",
                      left: "8px",
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CardMedia
                      component={"i"}
                      image={closeIcon}
                      sx={{
                        width: "20px",
                        height: "20px",
                        backgroundSize: "contain",
                      }}
                    />
                  </IconButton>
                  <CardMedia
                    component={"img"}
                    image={
                      typeof formik.values.image === "object"
                        ? URL.createObjectURL(formik.values.image[0])
                        : formik.values.image
                    }
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              ) : (
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  htmlFor="file"
                >
                  <CardMedia
                    component={"i"}
                    image={imageIcon}
                    sx={{
                      width: "40px",
                      height: "40px",
                      backgroundSize: "contain",
                    }}
                  />
                  <Typography sx={{ color: "#617696AB", fontSize: "18px" }}>
                    {t("home.banner_announcements_card.modal.file_input")}
                  </Typography>
                </label>
              )}
            </FileUpload>
          </DialogContent>
        </form>
        <DialogActions
          sx={{
            padding: "21px 24px",
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            disabled={formik.values.image ? false : true}
            sx={{ color: "white" }}
            onClick={handleDatePickerOpen}
          >
            {t("home.banner_announcements_card.modal.save_post")}
          </Button>

          <Button
            color="primary"
            variant="contained"
            disabled={formik.values.image ? false : true}
            sx={{
              color: "primary.dark",

              bgcolor: "primary.light",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "primary.dark",
                color: "white",
              },
            }}
            onClick={onSaveWithOutPost}
          >
            {t("home.banner_announcements_card.modal.save_without_post")}
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <DatePicker
        open={datePicker}
        handleClose={handleDatePickerClose}
        setCurrentDate={formik.setFieldValue}
        onSubmit={onSaveWithPost}
        isValid={formik.isValid}
      />
    </React.Fragment>
  );
}

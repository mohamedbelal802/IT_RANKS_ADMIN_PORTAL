import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import { Box, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as yup from "yup";

import closeIcon from "../../../assets/icons/close.svg";
import { useLocation, useSearchParams } from "react-router-dom";
import DatePicker from "./DatePicker";
import Alert from "./Alert";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const validationsForm = yup.object({
  date: yup.object().shape({
    startDate: yup.string().required(),
    endDate: yup.string().required(),
  }),
});

export default function EditAnnouncmentsModal() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [datePicker, setDatePicker] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [t] = useTranslation("global");
  const open = searchParams.get("editAnn") ? true : false;
  const { state } = useLocation();

  const formik = useFormik({
    initialValues: {
      image: "",
    },
    validationSchema: validationsForm,
    validateOnMount: true,
  });

  const handleClose = () => {
    formik.setValues({ image: "" });
    setSearchParams("");
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

  const onDeleteClick = () => {
    setAlert(true);
  };

  const onDeleteSubmit = () => {
    console.log("submited");
    closeDeleteAlert();
  };

  const closeDeleteAlert = () => {
    setAlert(false);
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
            sx={{ m: 0, p: 2, fontSize: { xs: "18px", md: "28px" } }}
            id="customized-dialog-title"
          >
            {t("home.special_announcements.modal.edit_title")}
          </DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {state?.date ? (
              <>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: { xs: "6px 6px", md: "14px 16px" },
                    minWidth: "unset",
                    boxShadow: "none",
                    borderRadius: "8px",
                  }}
                  onClick={handleDatePickerOpen}
                >
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    {t("home.special_announcements.modal.edit_period")}
                  </Typography>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M7.25 3V5.25M17.75 3V5.25M3.5 18.75V7.5C3.5 6.90326 3.73705 6.33097 4.15901 5.90901C4.58097 5.48705 5.15326 5.25 5.75 5.25H19.25C19.8467 5.25 20.419 5.48705 20.841 5.90901C21.2629 6.33097 21.5 6.90326 21.5 7.5V18.75M3.5 18.75C3.5 19.3467 3.73705 19.919 4.15901 20.341C4.58097 20.7629 5.15326 21 5.75 21H19.25C19.8467 21 20.419 20.7629 20.841 20.341C21.2629 19.919 21.5 19.3467 21.5 18.75M3.5 18.75V11.25C3.5 10.6533 3.73705 10.081 4.15901 9.65901C4.58097 9.23705 5.15326 9 5.75 9H19.25C19.8467 9 20.419 9.23705 20.841 9.65901C21.2629 10.081 21.5 10.6533 21.5 11.25V18.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>

                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: { xs: "6px 6px", md: "14px 16px" },
                    minWidth: "unset",
                    color: "black",
                    bgcolor: "#EFEFEF",
                    boxShadow: "none",
                    borderRadius: "8px",
                  }}
                >
                  <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                    {t("home.special_announcements.modal.hide")}
                  </Typography>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2.03613 12.322C1.96712 12.1146 1.96712 11.8904 2.03613 11.683C3.42313 7.51 7.36013 4.5 12.0001 4.5C16.6381 4.5 20.5731 7.507 21.9631 11.678C22.0331 11.885 22.0331 12.109 21.9631 12.317C20.5771 16.49 16.6401 19.5 12.0001 19.5C7.36213 19.5 3.42613 16.493 2.03613 12.322Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </>
            ) : (
              <Button
                color="primary"
                variant="contained"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: { xs: "6px 6px", md: "14px 16px" },
                  minWidth: "unset",
                  boxShadow: "none",
                  borderRadius: "8px",
                }}
                onClick={handleDatePickerOpen}
              >
                <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                  {t("home.special_announcements.modal.publish")}
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M7.25 3V5.25M17.75 3V5.25M3.5 18.75V7.5C3.5 6.90326 3.73705 6.33097 4.15901 5.90901C4.58097 5.48705 5.15326 5.25 5.75 5.25H19.25C19.8467 5.25 20.419 5.48705 20.841 5.90901C21.2629 6.33097 21.5 6.90326 21.5 7.5V18.75M3.5 18.75C3.5 19.3467 3.73705 19.919 4.15901 20.341C4.58097 20.7629 5.15326 21 5.75 21H19.25C19.8467 21 20.419 20.7629 20.841 20.341C21.2629 19.919 21.5 19.3467 21.5 18.75M3.5 18.75V11.25C3.5 10.6533 3.73705 10.081 4.15901 9.65901C4.58097 9.23705 5.15326 9 5.75 9H19.25C19.8467 9 20.419 9.23705 20.841 9.65901C21.2629 10.081 21.5 10.6533 21.5 11.25V18.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            )}

            <IconButton
              aria-label="close"
              onClick={onDeleteClick}
              sx={{
                color: (theme) => theme.palette.grey[500],
                backgroundColor: (theme) => theme.palette.grey[200],
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M11.99 7.75052L11.644 16.7505M6.856 16.7505L6.51 7.75052M16.478 4.54052C16.82 4.59252 17.16 4.64752 17.5 4.70652M16.478 4.54052L15.41 18.4235C15.3664 18.9887 15.1111 19.5167 14.695 19.9018C14.279 20.2868 13.7329 20.5007 13.166 20.5005H5.334C4.7671 20.5007 4.22102 20.2868 3.80498 19.9018C3.38894 19.5167 3.13359 18.9887 3.09 18.4235L2.022 4.54052M16.478 4.54052C15.3239 4.36604 14.1638 4.23362 13 4.14352M2.022 4.54052C1.68 4.59152 1.34 4.64652 1 4.70552M2.022 4.54052C3.17613 4.36604 4.33623 4.23362 5.5 4.14352M13 4.14352V3.22752C13 2.04752 12.09 1.06352 10.91 1.02652C9.80362 0.99116 8.69638 0.99116 7.59 1.02652C6.41 1.06352 5.5 2.04852 5.5 3.22752V4.14352M13 4.14352C10.5037 3.9506 7.99628 3.9506 5.5 4.14352"
                  stroke="#FF5858"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>

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
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundSize: "contain",
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <DialogContent dividers>
          <CardMedia
            component={"img"}
            image={state?.image}
            sx={{ width: "100%", height: "329px", objectFit: "cover" }}
          />
        </DialogContent>
      </BootstrapDialog>

      <DatePicker
        open={datePicker}
        handleClose={handleDatePickerClose}
        setCurrentDate={formik.setFieldValue}
        onSubmit={onSaveWithPost}
        isValid={formik.isValid}
      />

      <Alert
        title={t("home.special_announcements.modal.alert_title")}
        text={t("home.special_announcements.modal.alert_description")}
        onSubmit={onDeleteSubmit}
        open={alert}
        handleClose={closeDeleteAlert}
      />
    </React.Fragment>
  );
}

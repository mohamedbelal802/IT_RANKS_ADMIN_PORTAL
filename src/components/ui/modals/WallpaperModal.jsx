import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { useLocation, useSearchParams } from "react-router-dom";
import { Box, CardMedia, Typography } from "@mui/material";

import * as yup from "yup";
import { useFormik } from "formik";
import Alert from "./Alert";
import FileUpload from "../inputs/FileUpload";

import editIcon from "../../../assets/icons/edit.svg";
import { useTranslation } from "react-i18next";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const validationsForm = yup.object({
  image: yup.string().required(),
});
export default function WallpaperModal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useLocation();
  const [alert, setAlert] = React.useState(false);
  const [t] = useTranslation("global");
  const open = searchParams.get("wallpaper") ? true : false;
  // const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      image: "",
    },
    validationSchema: validationsForm,
    validateOnMount: true,
  });

  const handleAlertOpen = () => setAlert(true);
  const handleAlertClose = () => setAlert(false);
  const onDeleteSubmit = () => console.log("deleteSubmited");

  const handleClose = () => {
    formik.setFieldValue("image", "");
    setSearchParams("");
  };

  React.useEffect(() => {
    if (state?.image) {
      console.log(state);
      formik.setFieldValue("image", state.image);
    }
  }, [state]);
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            textAlign: "center",
            fontSize: { xs: "16px", md: "22px" },
            fontWeight: "400",
          }}
          id="customized-dialog-title"
        >
          اضافة خلفيه
        </DialogTitle>
        <Box
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {state && (
            <IconButton
              aria-label="close"
              onClick={handleAlertOpen}
              sx={{
                color: (theme) => theme.palette.grey[500],
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
          )}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
        </Box>
        <DialogContent>
          <FileUpload
            sx={{ minHeight: "300px" }}
            setFile={formik.setFieldValue}
            name={"image"}
          >
            {formik.values.image ? (
              <Box
                sx={{
                  width: "175px",
                  height: "134px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  position: "relative",
                }}
              >
                <CardMedia
                  component={"img"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                  image={
                    typeof formik.values.image === "object"
                      ? URL.createObjectURL(formik.values.image[0])
                      : formik.values.image
                  }
                />

                <label
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                    transform: "translate(50%,50%)",
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
                <div style={{ display: "flex", alignItems: "center" }}>
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
        </DialogContent>
        <DialogActions sx={{ justifyContent: "start", gap: "16px" }}>
          <Button
            disabled={!formik.isValid}
            variant="contained"
            color="primary"
            autoFocus
            onClick={handleClose}
          >
            حفظ
          </Button>

          <Button
            variant="outlined"
            color="warning"
            autoFocus
            onClick={handleClose}
          >
            الغاء
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <Alert
        open={alert}
        handleClose={handleAlertClose}
        onSubmit={onDeleteSubmit}
        title={"حذف الخلفيه؟"}
        text={"هل أنت متأكد أنك تريد حذف الخلفيه ؟"}
      />
    </React.Fragment>
  );
}

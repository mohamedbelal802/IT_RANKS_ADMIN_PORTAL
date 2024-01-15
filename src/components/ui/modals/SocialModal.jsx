import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useLocation, useSearchParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

import * as yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateSocialMedia } from "../../../store/socialMedia/socialMediaSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const validationsForm = yup.object({
  title: yup.string().required("Required"),
});
export default function SocialModal() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const open = searchParams.get("social") ? true : false;
  // const [open, setOpen] = React.useState(false);
  const [t] = useTranslation("global");
  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
    },
    validationSchema: validationsForm,
    validateOnMount: true,
  });

  const handleClose = () => {
    setSearchParams("");
    formik.setFieldValue("title", "");
    formik.setFieldValue("url", "");
  };

  const onSubmit = async () => {
    setIsLoading(true);
    await dispatch(
      updateSocialMedia({
        title: formik.values.title.toLowerCase(),
        url: formik.values.url,
        id: state?.id,
      })
    );
    handleClose();
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (state?.name) {
      formik.setFieldValue("title", state?.name);
      formik.setFieldValue("url", state.href);
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
          {t("home.social.title")}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
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
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "21px 0px",
              borderRadius: "10px",
              border: "1px solid #D9D9D9",
              backgroundColor: "#F5F5F7",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                padding: "4px 10px",
                backgroundColor: "#19353D",
                borderRadius: "4px",
              }}
            >
              <CardMedia
                component={"i"}
                image={state?.icon}
                sx={{
                  width: "12px",
                  height: "24px",
                  backgroundSize: "contain",
                }}
              />
            </Box>

            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              {state?.name}
            </Typography>
          </Box>

          <Box marginTop={"16px"}>
            <label
              style={{
                fontSize: "14px",
                marginBottom: "8px",
                display: "block",
                fontWeight: "400",
              }}
            >
              العنوان
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.url}
              name="url"
              style={{
                width: "100%",
                padding: "10px 8px",
                borderRadius: "8px",
                border: "0.6px solid #D9D9D9",
                background: "#fff",
              }}
              className="normalize"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={!formik.isValid || isLoading}
            variant="contained"
            color="primary"
            sx={{ marginLeft: "auto" }}
            autoFocus
            onClick={onSubmit}
          >
            حفظ
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

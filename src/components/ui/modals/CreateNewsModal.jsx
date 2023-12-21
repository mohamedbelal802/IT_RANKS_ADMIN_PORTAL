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
import { specialNewsConfig } from "../../../utils/config";

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
  description: yup.string().required("Required"),
  image: yup.string().required("Required"),
});

export default function NewsModal() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [t] = useTranslation("global");
  const open = searchParams.get("modal") ? true : false;
  const id = searchParams.get("id");

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
    },
    validationSchema: validationsForm,
    onSubmit: (values) => saveNewHandler(values),
    validateOnMount: true,
  });

  const handleClose = () => {
    formik.setValues({ title: "", description: "", image: "" });
    setSearchParams("");
  };

  const saveNewHandler = (data) => {
    console.log(data);
  };

  const removeImg = (e) => {
    formik.setFieldValue("image", "");
  };

  React.useEffect(() => {
    if (id) {
      const data = specialNewsConfig[id];
      formik.setFieldValue("title", data.title);
      formik.setFieldValue("description", data.description);
      formik.setFieldValue("image", data.image);
    }
  }, [id]);
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
            {t("home.banner_news_card.modal.title")}
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
          <DialogContent
            dividers
            sx={{ borderBottom: "0px", borderColor: "#ccc" }}
          >
            <input
              onChange={formik.handleChange}
              value={formik.values.title}
              name={"title"}
              placeholder={t("home.banner_news_card.modal.title_input")}
              style={{
                border: "none",
                outline: "none",
                fontSize: "18px",
                color: "#617696AB",
                width: "100%",
              }}
              type="text"
            />
          </DialogContent>
          <DialogContent dividers sx={{ borderColor: "#ccc" }}>
            <textarea
              onChange={formik.handleChange}
              value={formik.values.description}
              name={"description"}
              placeholder={t("home.banner_news_card.modal.title_input")}
              style={{
                border: "none",
                outline: "none",
                fontSize: "18px",
                color: "#617696AB",
                width: "100%",
                resize: "none",
              }}
              type="text"
            />

            <FileUpload
              sx={{
                aaspectRatio: "unset",
                height: "160px",
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
                    sx={{ width: "100%", height: "100%", objectFit: "contain" }}
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
                    {t("home.banner_news_card.modal.file_input")}
                  </Typography>
                </label>
              )}
            </FileUpload>
          </DialogContent>
        </form>
        <DialogActions sx={{ padding: "21px 24px" }}>
          <Button
            color="primary"
            variant="contained"
            disabled={!formik.isValid}
            sx={{ color: "white", marginLeft: "auto" }}
            onClick={formik.submitForm}
          >
            {t("home.banner_news_card.modal.save_post")}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

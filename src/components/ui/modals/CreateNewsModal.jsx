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
import { useDispatch, useSelector } from "react-redux";
import { createNew } from "../../../store/news/newsSlice";

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
  content: yup.string().required("Required"),
  image: yup.string().required("Required"),
  // date: yup.object({
  //   startDate: yup.date(),
  //   endDate: yup.date(),
  // }),
});

export default function CreateNewsModal() {
  const { news } = useSelector((state) => state.news);
  let [searchParams, setSearchParams] = useSearchParams();
  const [datePicker, setDatePicker] = React.useState(false);
  const [t] = useTranslation("global");
  const open = searchParams.get("modal") ? true : false;
  const id = searchParams.get("id");

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      image: "",
      startDate: new Date(),
      endDate: new Date(),
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      if (id) {
        // dispatch(edi)
      } else {
        await dispatch(createNew({ data: values }));
      }
      setDatePicker(false);
      formik.setValues({
        title: "",
        content: "",
        image: "",
        startDate: new Date(),
        endDate: new Date(),
      });
      setSearchParams("");
      setSubmitting(false);
    },
    validationSchema: validationsForm,
    validateOnMount: true,
  });
  const handleDatePickerClose = () => {
    setDatePicker(false);
  };

  const handleClose = () => {
    formik.setValues({
      title: "",
      content: "",
      image: "",
      startDate: new Date(),
      endDate: new Date(),
    });
    setSearchParams("");
  };

  const removeImg = (e) => {
    formik.setFieldValue("image", "");
  };

  React.useEffect(() => {
    if (id) {
      const newArticle = news.find((item) => item.id === +id);
      if (!newArticle) {
        setSearchParams("");
        return;
      }

      formik.setFieldValue("title", newArticle.title);
      formik.setFieldValue("content", newArticle.content);
      formik.setFieldValue(
        "image",
        `data:image/png;base64,${newArticle.image}`
      );
      formik.setFieldValue("startDate", newArticle.startDate);
      formik.setFieldValue("endDate", newArticle.endDate);
    } else {
      formik.setValues({
        title: "",
        content: "",
        image: "",
        startDate: new Date(),
        endDate: new Date(),
      });
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
              value={formik.values.content}
              name={"content"}
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
                height: "200px",
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
                    image={formik.values.image && formik.values.image}
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
            sx={{
              color: "white",
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              "&.Mui-disabled": {
                color: "white",
              },
              textTransform: "capitalize",
            }}
            onClick={() => setDatePicker(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t("home.banner_news_card.modal.save_post")}
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <DatePicker
        open={datePicker}
        handleClose={handleDatePickerClose}
        isLoading={formik.isSubmitting}
        startDate={formik.values.startDate}
        endDate={formik.values.endDate}
        setFieldValue={formik.setFieldValue}
        onSubmit={formik.submitForm}
      />
    </React.Fragment>
  );
}

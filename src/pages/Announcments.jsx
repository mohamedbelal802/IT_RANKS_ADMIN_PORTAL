import React, { useRef, useState } from "react";
import MainSection from "../components/ui/sections/MainSection";
import {
  Box,
  CardMedia,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import editIcon from "../assets/icons/edit.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/ui/loading/Loader";

export default function Announcments() {
  const { announcements, status } = useSelector((state) => state.announcement);
  const navigate = useNavigate();

  const announcementsList = announcements.map((item) => (
    <div
      key={item.id}
      style={{
        width: "100%",
        height: "215px",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "10px",
        display: "flex",
      }}
      // draggable={true}
      // onDragStart={() => (dragPerson.current = index)}
      // onDragEnter={() => (dragOverPerson.current = index)}
      // onDragEnd={handleSort}
      // onDragOver={(e) => e.preventDefault()}
      className="special-news-card"
    >
      {item.status === "ON" ? (
        <Chip
          sx={{
            position: "absolute",
            zIndex: "12",
            top: "12px",
            right: "12px",
          }}
          label="منشور"
          color="success"
        />
      ) : (
        <Chip
          sx={{
            position: "absolute",
            zIndex: "12",
            top: "12px",
            right: "12px",
          }}
          label="غير منشور"
          color="warning"
        />
      )}
      <CardMedia
        component={"img"}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        image={`data:image/png;base64,${item.image}`}
      />

      <div
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#383C404D",
          backdropFilter: "blur(3px)",
          opacity: 0,
          transition: "0.3s",
        }}
        className="card-layer"
      >
        <Box
          sx={{
            position: "absolute",
            top: "17px",
            left: "16px",
            padding: "4px",
            backgroundColor: "#FFFFFF24",
            borderRadius: "4px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M9.33333 20.6663C9.33333 19.9591 9.05238 19.2808 8.55228 18.7807C8.05219 18.2806 7.37391 17.9997 6.66667 17.9997C5.95942 17.9997 5.28115 18.2806 4.78105 18.7807C4.28095 19.2808 4 19.9591 4 20.6663C4 21.3736 4.28095 22.0519 4.78105 22.552C5.28115 23.0521 5.95942 23.333 6.66667 23.333C7.37391 23.333 8.05219 23.0521 8.55229 22.552C9.05238 22.0519 9.33333 21.3736 9.33333 20.6663ZM18.6667 20.6663C18.6667 19.9591 18.3857 19.2808 17.8856 18.7807C17.3855 18.2806 16.7072 17.9997 16 17.9997C15.2928 17.9997 14.6145 18.2806 14.1144 18.7807C13.6143 19.2808 13.3333 19.9591 13.3333 20.6663C13.3333 21.3736 13.6143 22.0519 14.1144 22.552C14.6145 23.0521 15.2928 23.333 16 23.333C16.7072 23.333 17.3855 23.0521 17.8856 22.552C18.3857 22.0519 18.6667 21.3736 18.6667 20.6663ZM25.3333 17.9997C26.0406 17.9997 26.7189 18.2806 27.219 18.7807C27.719 19.2808 28 19.9591 28 20.6663C28 21.3736 27.719 22.0519 27.219 22.552C26.7189 23.0521 26.0406 23.333 25.3333 23.333C24.6261 23.333 23.9478 23.0521 23.4477 22.552C22.9476 22.0519 22.6667 21.3736 22.6667 20.6663C22.6667 19.9591 22.9476 19.2808 23.4477 18.7807C23.9478 18.2806 24.6261 17.9997 25.3333 17.9997ZM9.33333 11.333C9.33333 10.6258 9.05238 9.94749 8.55228 9.44739C8.05219 8.94729 7.37391 8.66634 6.66667 8.66634C5.95942 8.66634 5.28114 8.94729 4.78105 9.44739C4.28095 9.94749 4 10.6258 4 11.333C4 12.0403 4.28095 12.7185 4.78105 13.2186C5.28115 13.7187 5.95942 13.9997 6.66667 13.9997C7.37391 13.9997 8.05219 13.7187 8.55228 13.2186C9.05238 12.7185 9.33333 12.0403 9.33333 11.333ZM16 8.66634C16.7072 8.66634 17.3855 8.94729 17.8856 9.44739C18.3857 9.94749 18.6667 10.6258 18.6667 11.333C18.6667 12.0403 18.3857 12.7185 17.8856 13.2186C17.3855 13.7187 16.7072 13.9997 16 13.9997C15.2928 13.9997 14.6145 13.7187 14.1144 13.2186C13.6143 12.7185 13.3333 12.0403 13.3333 11.333C13.3333 10.6258 13.6143 9.94749 14.1144 9.44739C14.6145 8.94729 15.2928 8.66634 16 8.66634ZM28 11.333C28 10.6258 27.719 9.94749 27.219 9.44739C26.7189 8.94729 26.0406 8.66634 25.3333 8.66634C24.6261 8.66634 23.9478 8.94729 23.4477 9.44739C22.9476 9.94749 22.6667 10.6258 22.6667 11.333C22.6667 12.0403 22.9476 12.7185 23.4477 13.2186C23.9478 13.7187 24.6261 13.9997 25.3333 13.9997C26.0406 13.9997 26.7189 13.7187 27.219 13.2186C27.719 12.7185 28 12.0403 28 11.333Z"
              fill="white"
            />
          </svg>
        </Box>
        <IconButton
          onClick={() =>
            navigate("?editAnn=true", {
              state: {
                image: item.image,
                startDate: item.startDate,
                endDate: item.endDate,
                id: item.id,
                status: item.status,
              },
            })
          }
        >
          <CardMedia
            component={"i"}
            sx={{
              width: "24px",
              height: "24px",
              backgroundImage: "contain",
            }}
            image={editIcon}
          />
        </IconButton>
      </div>
    </div>
  ));
  // const [announcements, setAnnouncments] = useState([
  //   {
  //     image: ann1,
  //     date: {
  //       endDate:
  //         "Thu Nov 30 2023 00:00:00 GMT+0200 (Eastern European Standard Time)",
  //       startDate:
  //         "Tue Nov 28 2023 00:00:00 GMT+0200 (Eastern European Standard Time)",
  //     },
  //   },
  //   {
  //     image: ann2,
  //     date: {
  //       endDate:
  //         " Thu Nov 30 2023 00:00:00 GMT+0200 (Eastern European Standard Time)",
  //       startDate:
  //         "Tue Nov 28 2023 00:00:00 GMT+0200 (Eastern European Standard Time)",
  //     },
  //   },
  //   { image: ann1, date: "" },
  //   {
  //     image: ann3,
  //     date: {
  //       endDate:
  //         " Thu Nov 30 2023 00:00:00 GMT+0200 (Eastern European Standard Time)",
  //       startDate:
  //         "Tue Nov 28 2023 00:00:00 GMT+0200 (Eastern European Standard Time)",
  //     },
  //   },
  //   { image: ann2, date: "" },
  // ]);
  // const navigate = useNavigate();
  // const dragPerson = useRef();
  // const dragOverPerson = useRef();

  // const handleSort = () => {
  //   const newAnn = [...announcements];
  //   const temp = newAnn[dragPerson.current];
  //   newAnn[dragPerson.current] = newAnn[dragOverPerson.current];
  //   newAnn[dragOverPerson.current] = temp;
  //   setAnnouncments((prev) => newAnn);
  // };

  return (
    <MainSection name={"announcments"}>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "17px 20px",
            borderRadius: "9px",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "700" }}
              variant="h5"
            >
              كل الاعلانات
            </Typography>

            <IconButton onClick={() => navigate("/")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1 13L13 1M1 1L13 13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </Box>

          <Stack sx={{ marginTop: "10px" }}>
            {status === "pending" ? <Loader /> : announcementsList}
          </Stack>
        </Box>
      </Container>
    </MainSection>
  );
}

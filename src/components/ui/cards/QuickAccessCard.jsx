import { Box, CardMedia, Fab } from "@mui/material";
import React from "react";

export default function QuickAccessCard({
  icon,
  background,
  disabled,
  selected,
}) {
  return (
    <Fab
      sx={{
        position: "relative",
        width: "48px",
        height: "48px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: background,
        cursor: "pointer",
        flexShrink: "0",
        outline: `4px solid ${selected ? "#D6D6D6" : "transparent"}`,
        ":hover": {
          background: background,
        },
      }}
      disabled={disabled}
    >
      <CardMedia
        component={"i"}
        sx={{ width: "24px", height: "24px" }}
        image={icon}
      />

      {selected && (
        <Box
          sx={{
            position: "absolute",
            left: "0px",
            top: "0px",
            padding: "4px",
            borderRadius: "50%",
            backgroundColor: "#04D2AB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "translate(-30%,-30%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.07365 0.06297C8.15639 0.118139 8.21383 0.203916 8.23333 0.301433C8.25284 0.39895 8.23281 0.500221 8.17765 0.58297L3.67765 7.33297C3.64685 7.37909 3.60622 7.41781 3.55866 7.44634C3.51111 7.47486 3.45781 7.49249 3.40263 7.49794C3.34744 7.50339 3.29173 7.49653 3.23951 7.47786C3.18729 7.45919 3.13987 7.42918 3.10065 7.38997L0.100646 4.38997C0.0344059 4.31888 -0.00165568 4.22486 5.84235e-05 4.12771C0.00177253 4.03056 0.0411285 3.93787 0.109835 3.86916C0.178542 3.80045 0.271234 3.7611 0.368385 3.75938C0.465535 3.75767 0.559559 3.79373 0.630646 3.85997L3.30715 6.53647L7.55365 0.16697C7.60881 0.0842274 7.69459 0.0267872 7.79211 0.00728377C7.88963 -0.0122197 7.9909 0.007811 8.07365 0.06297Z"
              fill="white"
            />
          </svg>
        </Box>
      )}
    </Fab>
  );
}

import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function LoadingPage() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        "&&.MuiBox-root": {
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        },
        height: "100vh",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loader() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        "&&.MuiBox-root": {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        },
        height: "10vh",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

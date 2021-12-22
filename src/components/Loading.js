import React from "react";
// MUI
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <Box
      my={{ xs: 40, sm: 40, m: 40, lg: 40 }}
      mx={{ xs: 35, sm: 50, m: 50, lg: 70 }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;

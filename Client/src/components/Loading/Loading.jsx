import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
function Loading() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={3} direction="row">
      <CircularProgress color="secondary" size={75} />
      <CircularProgress color="success" size={75} />
      <CircularProgress color="inherit" size={75} />
    </Stack>
  );
}

export default Loading;

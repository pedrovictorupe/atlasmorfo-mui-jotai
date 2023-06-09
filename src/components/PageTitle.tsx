import { Typography } from "@mui/material";
import React from "react";

export default ({ children }: any) => (
  <Typography variant="h4" padding={2} letterSpacing={4} fontWeight={1}>
    {children}
  </Typography>
);

import { Typography } from "@mui/material";
import React from "react";

export default (props: any) => {
  return (
    <Typography
      component="p"
      variant="body1"
      padding={1}
      paddingLeft={2}
      {...props}
    />
  );
};

import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default (props: {
  onClick: () => void;
  children: string;
  startIcon?: React.ReactNode;
}) => (
  <Button
    variant="contained"
    startIcon={props.startIcon}
    sx={{ borderRadius: 10 }}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default ({ onClick, startIcon, sx, children }: IProps) => (
  <Button
    variant="contained"
    startIcon={startIcon}
    sx={{ ...sx, borderRadius: 10 }}
    onClick={onClick}
  >
    {children}
  </Button>
);

type IProps = {
  onClick: () => void;
  children: string;
  startIcon?: React.ReactNode;
  sx?: Object;
};

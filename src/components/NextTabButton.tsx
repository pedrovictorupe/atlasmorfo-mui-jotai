import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default (props: { onClick: () => void }) => (
  <div style={{ textAlign: "right" }}>
    <Button
      variant="contained"
      startIcon={<ArrowForward />}
      sx={{ borderRadius: 10 }}
      onClick={props.onClick}
    >
      Prosseguir{" "}
    </Button>
  </div>
);

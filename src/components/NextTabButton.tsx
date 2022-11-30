import { ArrowForward } from "@mui/icons-material";
import React from "react";
import DefaultButton from "./DefaultButton";

export default (props: { onClick: () => void }) => (
  <div style={{ textAlign: "right" }}>
    <DefaultButton onClick={props.onClick} startIcon={<ArrowForward />}>
      Prosseguir
    </DefaultButton>
  </div>
);

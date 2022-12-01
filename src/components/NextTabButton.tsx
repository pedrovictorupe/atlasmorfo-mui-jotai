import { ArrowForward } from "@mui/icons-material";
import React from "react";
import DefaultButton from "./DefaultButton";

export default ({ onClick }: { onClick: () => void }) => (
  <div style={{ textAlign: "right" }}>
    <DefaultButton onClick={onClick} startIcon={<ArrowForward />}>
      Prosseguir
    </DefaultButton>
  </div>
);

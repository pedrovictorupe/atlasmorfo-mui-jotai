import React from "react";
import DefaultButton from "./DefaultButton";

export default (props: { onClick: () => void }) => (
  <div style={{ textAlign: "right" }}>
    <DefaultButton onClick={props.onClick}>Prosseguir</DefaultButton>
  </div>
);

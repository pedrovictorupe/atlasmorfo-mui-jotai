import { Container } from "@mui/system";
import React from "react";

export default (props: any) => (
  <Container sx={{ maxWidth: "420px", margin: "0px auto" }}>
    <Container sx={{ position: "relative", pb: "75%", height: "0px" }}>
      {props.children}
    </Container>
  </Container>
);

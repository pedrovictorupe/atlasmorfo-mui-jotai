import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";

// Para fazer: trocar indicePreTeste por uma busca usando o "id" de cada item em pretestes.json
export default function PreTeste(props: { quiz: JSX.Element }) {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom>
        Pré-teste
      </Typography>
      <Alert variant="outlined" severity="info">
        <Typography variant="overline">
          Tente responder com os conhecimentos que você já tem e confira sua
          resposta durante a lição
        </Typography>
      </Alert>
      {/* <ErrorRadios {...ConteudoPreTestes[0]} /> */}
      {props.quiz}
    </Container>
  );
}

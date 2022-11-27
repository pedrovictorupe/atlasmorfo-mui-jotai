import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import conteudoPreTestes from "../content/pretestes.json";
import Quiz from "../components/Quiz";

// Para fazer: trocar indicePreTeste por uma busca usando o "id" de cada item em pretestes.json
export default function PreTeste(props: { indicePreTeste: number }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
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
        <Quiz
          late-eval
          content={conteudoPreTestes[props.indicePreTeste]}
        ></Quiz>
      </Box>
    </Container>
  );
}

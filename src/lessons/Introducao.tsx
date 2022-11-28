import { useAtom } from "jotai";
import React from "react";
import { useState } from "react";
// import { DefaultPages } from "../@types/DefaultPages";
import { editarProgressoLicaoAtom } from "../atoms/progresso";
import PreTeste from "../templates/PreTeste";
import preTesteContents from "../content/pretestes.json";
import { Box as Grid, Container } from "@mui/material";
import MultipleChoiceQuiz from "../components/MultipleChoiceQuiz";
import BottomNavBar, {
  DEFAULT_NAVBAR_HEIGHT,
} from "../components/BottomNavBar";
import type DefaultPage from "../@types/DefaultPage";
import { DefaultPages } from "../constants";

export default function Introducao() {
  const [progressoLicao, setProgressoLicao] = useAtom(editarProgressoLicaoAtom);
  const [paginaAtual, setPaginaAtual] = useState<DefaultPage>("PRE");

  let _element: JSX.Element | null = null;

  if (paginaAtual == "PRE") {
    _element = (
      <PreTeste
        quiz={<MultipleChoiceQuiz {...preTesteContents.introducao} />}
      />
    );
  }

  return (
    <>
      <Container
        sx={{
          mb: 2,
        }}
      >
        {_element}
      </Container>
      <BottomNavBar
        paginaAtual={DefaultPages.indexOf(paginaAtual)}
        setPaginaAtual={(n: number) => setPaginaAtual(DefaultPages[n])}
      />
    </>
  );
}

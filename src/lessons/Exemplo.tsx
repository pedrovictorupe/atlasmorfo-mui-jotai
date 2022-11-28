import { useAtom } from "jotai";
import React from "react";
import { useState } from "react";
// import { DefaultPages } from "../@types/DefaultPages";
import { editarProgressoLicaoAtom } from "../atoms/progresso";
import PreTeste from "../components/PreTeste";
import preTesteContents from "../content/pretestes.json";
import { BottomNavigation, Container } from "@mui/material";
import MultipleChoiceQuiz from "../components/MultipleChoiceQuiz";
import BottomNavBar from "../components/BottomNavBar";
import { DefaultPages } from "../constants";
import DefaultPage from "../@types/DefaultPage";

const LESSON_NAME = "exemplo";
export default function Exemplo() {
  const [progressoLicao, editarProgresso] = useAtom(editarProgressoLicaoAtom);
  const [paginaAtual, setPaginaAtual] = useState<DefaultPage>("PRE");

  let _element: JSX.Element | null = null;

  if (paginaAtual == "PRE") {
    _element = (
      <PreTeste
        quiz={
          <MultipleChoiceQuiz
            {...preTesteContents[LESSON_NAME]}
            onSubmit={() =>
              editarProgresso({
                lessonTitle: LESSON_NAME,
                // state inicia com valor "PRETESTE_NAO_RESPONDIDO"
                // Quando o usuário confirma o formulário, o state deve mudar para "PRETESTE_RESPONDIDO"
                state: "PRETESTE_RESPONDIDO",
              })
            }
          />
        }
      />
    );
  }

  return (
    <>
      <Container
        sx={{
          height: "80vh",
          overflowY: "auto",
          p: 0,
        }}
      >
        {_element}
      </Container>
      <BottomNavigation />
      <BottomNavBar
        // DefaultPages mapeia "PRE", "AULA", "POS" para 0, 1 e 2 (pois BottomNavBar usa índices para gerenciar as abas)
        currentTab={DefaultPages.indexOf(paginaAtual)}
        setPaginaAtual={(n: number) => setPaginaAtual(DefaultPages[n])}
      />
    </>
  );
}

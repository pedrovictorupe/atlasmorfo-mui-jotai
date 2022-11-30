import VideoTab from "./Tabs/VideoTab";
import React from "react";
import { useState } from "react";
import DefaultPreTeste from "../components/DefaultPreTeste";
import preTesteContents from "../contents.json";
import { Container } from "@mui/material";
import MultipleChoiceQuiz from "../components/MultipleChoiceQuiz";
import { DEFAULT_PAGES } from "../constants";
import DefaultPage from "../@types/DefaultPage";
import LessonStateEnum from "../@types/LessonStateEnum";
import {
  EditLessonStateAction,
  editLessonStateAtom,
} from "../atoms/lessonStateAtom";
import { useAtom } from "jotai";
import DefaultBottomNavBar from "../components/DefaultBottomNavBar";
import Intro from "./Tabs/Intro";
import PosTesteTab from "./Tabs/PosTesteTab";

const LESSON_NAME = "joao-e-as-etapas-da-hemostasia";

export default (): JSX.Element => {
  const [progresso, editarProgresso]: [
    LessonStateEnum,
    (update: EditLessonStateAction) => void
  ] = useAtom(editLessonStateAtom);
  const [paginaAtual, setPaginaAtual] = useState<DefaultPage>(DEFAULT_PAGES[0]);
  const [isGameRulesDialogOpen, setGameRulesDialogOpen] = useState(true);

  let currentTab: JSX.Element | null = null;

  switch (paginaAtual) {
    case "INTRO":
      currentTab = Intro({ editarProgresso, setPaginaAtual });
      break;
    case "PRE":
      currentTab = (
        <DefaultPreTeste
          quiz={
            <MultipleChoiceQuiz
              {...preTesteContents[LESSON_NAME]}
              onSubmit={() => {
                editarProgresso({
                  lessonTitle: "joao-e-as-etapas-da-hemostasia",
                  state: "PRETESTE_RESPONDIDO",
                });
                setPaginaAtual("VIDEO");
              }}
            />
          }
        />
      );
      break;
    case "VIDEO":
      currentTab = <VideoTab setPaginaAtual={setPaginaAtual} />;
      break;
    case "POS":
      currentTab = (
        <PosTesteTab
          isGameRulesDialogOpen={isGameRulesDialogOpen}
          setGameRulesDialogOpen={setGameRulesDialogOpen}
        />
      );
      break;
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
        {currentTab}
      </Container>
      <DefaultBottomNavBar
        currentTab={DEFAULT_PAGES.indexOf(paginaAtual)}
        setCurrentTab={(n: number) => setPaginaAtual(DEFAULT_PAGES[n])}
        progresso={progresso}
      />
    </>
  );
};

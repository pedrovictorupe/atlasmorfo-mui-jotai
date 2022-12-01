import VideoTab from "./Tabs/VideoTab";
import React from "react";
import { useState } from "react";
import DefaultPreTeste from "../components/DefaultPreTeste";
import preTesteContents from "../contents.json";
import { Container } from "@mui/material";
import MultipleChoiceQuiz from "../components/MultipleChoiceQuiz";
import { DEFAULT_TABS } from "../constants";
import DefaultTab from "../@types/DefaultPage";
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
  const [lessonState, changeLessonState]: [
    LessonStateEnum,
    (update: EditLessonStateAction) => void
  ] = useAtom(editLessonStateAtom);
  const [currentTab, setCurrentTab] = useState<DefaultTab>(DEFAULT_TABS[0]);
  const [isGameRulesDialogOpen, setGameRulesDialogOpen] = useState(true);

  let currentTabComponent: JSX.Element | null = null;

  switch (currentTab) {
    case "INTRO":
      currentTabComponent = Intro({
        changeLessonState: changeLessonState,
        setPaginaAtual: setCurrentTab,
      });
      break;
    case "PRE":
      currentTabComponent = (
        <DefaultPreTeste
          quiz={
            <MultipleChoiceQuiz
              {...preTesteContents[LESSON_NAME]}
              onSubmit={() => {
                changeLessonState({
                  lessonTitle: "joao-e-as-etapas-da-hemostasia",
                  state: "PRETESTE_RESPONDIDO",
                });
                setCurrentTab("VIDEO");
              }}
            />
          }
        />
      );
      break;
    case "VIDEO":
      currentTabComponent = <VideoTab setCurrentTab={setCurrentTab} />;
      break;
    case "POS":
      currentTabComponent = (
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
        {currentTabComponent}
      </Container>
      <DefaultBottomNavBar
        currentTab={DEFAULT_TABS.indexOf(currentTab)}
        setCurrentTab={(n: number) => setCurrentTab(DEFAULT_TABS[n])}
        lessonState={lessonState}
      />
    </>
  );
};

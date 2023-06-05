import VideoTab from "./Tabs/VideoTab";
import React from "react";
import { useState } from "react";
import DefaultPreTeste from "../../components/DefaultPreTeste";
import preTesteContents from "../../contents.json";
import { Container } from "@mui/material";
import MultipleChoiceQuiz from "../../components/MultipleChoiceQuiz";
import { DEFAULT_TABS } from "../../constants";
import DefaultTab from "../../@types/DefaultTab";
import LessonStateEnum from "../../@types/LessonStateEnum";
import { lessonStateAtom } from "../../atoms/lessonStateAtom";
import { useAtom, useSetAtom } from "jotai";
import DefaultBottomNavBar from "../../components/DefaultBottomNavBar";
import Intro from "./Tabs/IntroTab";
import PosTesteTab from "./Tabs/PosTesteTab";

const LESSON_NAME = "joao-e-as-etapas-da-hemostasia";

export default (): JSX.Element => {
  const setLessonState = useSetAtom(lessonStateAtom);
  const [currentTab, setCurrentTab] = useState<DefaultTab>(DEFAULT_TABS[0]);

  let currentTabComponent: JSX.Element | null = null;

  switch (currentTab) {
    case "INTRO":
      currentTabComponent = <Intro setCurrentTab={setCurrentTab} />;
      break;
    case "PRE":
      currentTabComponent = (
        <DefaultPreTeste
          quiz={
            <MultipleChoiceQuiz
              {...preTesteContents[LESSON_NAME]}
              onSubmit={() => {
                setLessonState("PRETESTE_RESPONDIDO");
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
      currentTabComponent = <PosTesteTab />;
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
      />
    </>
  );
};

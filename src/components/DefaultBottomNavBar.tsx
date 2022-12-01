import {
  PsychologyAlt,
  Lightbulb,
  SmartDisplay,
  TipsAndUpdates,
  Lock,
  Check,
} from "@mui/icons-material";
import React from "react";
import LessonStateEnum from "../@types/LessonStateEnum";
import BottomNavBar from "./BottomNavBar";

export default (props: {
  currentTab: number;
  setCurrentTab: (currentTab: number) => void;
  lessonState: LessonStateEnum;
}) => (
  <BottomNavBar
    // DefaultPages mapeia "PRE", "AULA", "POS" para 0, 1 e 2 (pois BottomNavBar usa índices para gerenciar as abas)
    currentTab={props.currentTab}
    setPaginaAtual={props.setCurrentTab}
    items={[
      {
        label: "Intro",
        icon: props.lessonState == undefined ? <PsychologyAlt /> : <Check />,
        isLocked: false,
      },
      {
        label: "Pré-teste",
        icon: getPreTesteIcon(props.lessonState),
        isLocked: isPreTesteLocked(props.lessonState),
      },
      {
        label: "Vídeo",
        icon: getVideoIcon(props.lessonState),
        isLocked: isVideoTabLocked(props.lessonState),
      },
      {
        label: "Pós-teste",
        icon: getPosTesteIcon(props.lessonState),
        isLocked: isPosTesteLocked(props.lessonState),
      },
    ]}
  />
);

const isPreTesteLocked = (lessonState: LessonStateEnum): boolean =>
  lessonState == "PRETESTE_RESPONDIDO" || lessonState == undefined;

const getPreTesteIcon = (lessonState: LessonStateEnum): JSX.Element => {
  if (isPreTesteLocked(lessonState)) return <Lock />;
  else if (
    lessonState == "INTRO_LIDA" ||
    lessonState == "MUDANDO_RESPOSTA" ||
    lessonState == undefined
  )
    return <Lightbulb />;
  else return <Check />;
};

const isVideoTabLocked = (lessonState: string | undefined): boolean =>
  lessonState == undefined;

const getVideoIcon = (lessonState: LessonStateEnum): JSX.Element => {
  if (isVideoTabLocked(lessonState)) return <Lock />;
  else if (
    lessonState == "GABARITO_PRETESTE_VISUALIZADO" ||
    lessonState == "POS_TESTE_RESPONDIDO"
  )
    return <Check />;
  else return <SmartDisplay />;
};

const isPosTesteLocked = (lessonState: LessonStateEnum): boolean =>
  !(
    lessonState == "POS_TESTE_RESPONDIDO" ||
    lessonState == "GABARITO_PRETESTE_VISUALIZADO"
  );

const getPosTesteIcon = (lessonState: LessonStateEnum): JSX.Element => {
  if (lessonState == "POS_TESTE_RESPONDIDO") return <Check />;
  else if (lessonState == "GABARITO_PRETESTE_VISUALIZADO")
    return <TipsAndUpdates />;
  else return <Lock />;
};

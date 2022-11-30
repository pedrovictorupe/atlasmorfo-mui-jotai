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
  progresso: LessonStateEnum;
}) => (
  <BottomNavBar
    // DefaultPages mapeia "PRE", "AULA", "POS" para 0, 1 e 2 (pois BottomNavBar usa índices para gerenciar as abas)
    currentTab={props.currentTab}
    setPaginaAtual={props.setCurrentTab}
    items={[
      {
        label: "Intro",
        icon: props.progresso == undefined ? <PsychologyAlt /> : <Check />,
        isLocked: false,
      },
      {
        label: "Pré-teste",
        icon: getPreTesteIcon(props.progresso),
        isLocked: isPreTesteLocked(props.progresso),
      },
      {
        label: "Vídeo",
        icon: getVideoIcon(props.progresso),
        isLocked: isVideoTabLocked(props.progresso),
      },
      {
        label: "Pós-teste",
        icon: getPosTesteIcon(props.progresso),
        isLocked: isPosTesteLocked(props.progresso),
      },
    ]}
  />
);

const isPreTesteLocked = (progresso: LessonStateEnum): boolean =>
  progresso == "PRETESTE_RESPONDIDO" || progresso == undefined;

const getPreTesteIcon = (progresso: LessonStateEnum): JSX.Element => {
  if (isPreTesteLocked(progresso)) return <Lock />;
  else if (
    progresso == "INTRO_LIDA" ||
    progresso == "MUDANDO_RESPOSTA" ||
    progresso == undefined
  )
    return <Lightbulb />;
  else return <Check />;
};

const isVideoTabLocked = (progresso: string | undefined): boolean =>
  progresso == undefined;

const getVideoIcon = (progresso: LessonStateEnum): JSX.Element => {
  if (isVideoTabLocked(progresso)) return <Lock />;
  else if (
    progresso == "GABARITO_PRETESTE_VISUALIZADO" ||
    progresso == "POS_TESTE_RESPONDIDO"
  )
    return <Check />;
  else return <SmartDisplay />;
};

const isPosTesteLocked = (progresso: LessonStateEnum): boolean =>
  !(
    progresso == "POS_TESTE_RESPONDIDO" ||
    progresso == "GABARITO_PRETESTE_VISUALIZADO"
  );

const getPosTesteIcon = (progresso: LessonStateEnum): JSX.Element => {
  if (progresso == "POS_TESTE_RESPONDIDO") return <Check />;
  else if (progresso == "GABARITO_PRETESTE_VISUALIZADO")
    return <TipsAndUpdates />;
  else return <Lock />;
};

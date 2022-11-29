import {
  PsychologyAlt,
  Lightbulb,
  SmartDisplay,
  TipsAndUpdates,
  Lock,
  Check,
} from "@mui/icons-material";
import React from "react";
import ProgressoEnum from "../@types/ProgressoEnum";
import BottomNavBar from "./BottomNavBar";

export default (props: {
  currentTab: number;
  setCurrentTab: (currentTab: number) => void;
  progresso: ProgressoEnum;
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
        isLocked:
          props.progresso == "PRETESTE_RESPONDIDO" ||
          props.progresso == undefined,
      },
      {
        label: "Vídeo",
        icon:
          props.progresso == "INTRO_LIDA" ||
          props.progresso == "PRETESTE_RESPONDIDO" ||
          props.progresso == "MUDANDO_RESPOSTA" ||
          props.progresso == undefined ? (
            <SmartDisplay />
          ) : (
            <Check />
          ),
        isLocked:
          props.progresso == "INTRO_LIDA" || props.progresso == undefined,
      },
      {
        label: "Pós-teste",
        icon:
          props.progresso == "POS_TESTE_RESPONDIDO" ? (
            <Check />
          ) : (
            <TipsAndUpdates />
          ),
        isLocked:
          props.progresso == "INTRO_LIDA" ||
          props.progresso == "PRETESTE_RESPONDIDO" ||
          props.progresso == "MUDANDO_RESPOSTA" ||
          props.progresso == undefined,
      },
    ]}
  />
);

const getPreTesteIcon = (progresso: ProgressoEnum): JSX.Element => {
  if (progresso == "PRETESTE_RESPONDIDO") return <Lock />;
  else if (
    progresso == "INTRO_LIDA" ||
    progresso == "MUDANDO_RESPOSTA" ||
    progresso == undefined
  )
    return <Lightbulb />;
  else return <Check />;
};

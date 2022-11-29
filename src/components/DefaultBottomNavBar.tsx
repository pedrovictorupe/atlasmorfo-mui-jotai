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
        icon:
          props.progresso == undefined ? (
            <PsychologyAlt />
          ) : (
            <Check />
          ),
        isLocked: false,
      },
      {
        label: "Pré-teste",
        icon:
          props.progresso == "PRETESTE_RESPONDIDO" ? <Lock /> : <Lightbulb />,
        isLocked: props.progresso == "PRETESTE_RESPONDIDO",
      },
      { label: "Vídeo", icon: <SmartDisplay />, isLocked: false },
      { label: "Pós-teste", icon: <TipsAndUpdates />, isLocked: false },
    ]}
  />
);

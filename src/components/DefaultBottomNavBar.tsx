import {
  PsychologyAlt,
  Lightbulb,
  SmartDisplay,
  TipsAndUpdates,
  Lock,
  Check,
} from "@mui/icons-material";
import { useAtom } from "jotai";
import React from "react";
import LessonStateEnum from "../@types/LessonStateEnum";
import { lessonStateAtom } from "../atoms/lessonStateAtom";
import BottomNavBar from "./BottomNavBar";

export default ({ currentTab, setCurrentTab }: IProps) => {
  const [lessonState] = useAtom(lessonStateAtom);

  return (
    <BottomNavBar
      // DefaultPages mapeia "PRE", "AULA", "POS" para 0, 1 e 2 (pois BottomNavBar usa índices para gerenciar as abas)
      currentTab={currentTab}
      setPaginaAtual={setCurrentTab}
      items={[
        {
          label: "Intro",
          icon: lessonState == undefined ? <PsychologyAlt /> : <Check />,
          isLocked: false,
        },
        {
          label: "Pré-teste",
          icon: getPreTesteIcon(lessonState),
          isLocked: isPreTesteLocked(lessonState),
        },
        {
          label: "Vídeo",
          icon: getVideoIcon(lessonState),
          isLocked: isVideoTabLocked(lessonState),
        },
        {
          label: "Pós-teste",
          icon: getPosTesteIcon(lessonState),
          isLocked: isPosTesteLocked(lessonState),
        },
      ]}
    />
  );
};

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

const isVideoTabLocked = (lessonState: LessonStateEnum | undefined): boolean =>
  lessonState == undefined || lessonState == "INTRO_LIDA";

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

type IProps = {
  currentTab: number;
  setCurrentTab: (currentTab: number) => void;
};

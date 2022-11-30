import DefaultPage from "./@types/DefaultPage";
import LessonStateEnum from "./@types/LessonStateEnum";
import content from "./contents.json";

export const StatesPossiveis: LessonStateEnum[] = [
  "INTRO_LIDA",
  "PRETESTE_RESPONDIDO",
  "GABARITO_PRETESTE_VISUALIZADO",
  "MUDANDO_RESPOSTA",
  "POS_TESTE_RESPONDIDO",
];

export const DEFAULT_PAGES: DefaultPage[] = ["INTRO", "PRE", "VIDEO", "POS"];

export const LESSON_NAMES = Object.keys(content);

export const DRAWER_WIDTH = 240;

export const TYPOGRAPHY_TEXT_CENTRALIZE = {
  display: "flex",
  alignItems: "center",
};

import DefaultPage from "./@types/DefaultPage";
import ProgressoEnum from "./@types/ProgressoEnum";
import content from "./contents.json";
import keys from "lodash/keys";

export const StatesPossiveis: ProgressoEnum[] = [
  "PRETESTE_NAO_RESPONDIDO",
  "PRETESTE_RESPONDIDO",
  "GABARITO_PRETESTE_VISUALIZADO",
  "POS_TESTE_RESPONDIDO",
];

export const DEFAULT_PAGES: DefaultPage[] = ["PRE", "AULA", "POS"];

export const LESSON_NAMES = keys(content);

export const DRAWER_WIDTH = 240;

export const TYPOGRAPHY_TEXT_CENTRALIZE = {
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
};

import DefaultPage from "./@types/DefaultPage";
import ProgressoEnum from "./@types/ProgressoEnum";
import content from "./content/pretestes.json";
import keys from "lodash/keys";

export const StatesPossiveis: ProgressoEnum[] = [
  "PRETESTE_NAO_RESPONDIDO",
  "PRETESTE_RESPONDIDO",
  "GABARITO_PRETESTE_VISUALIZADO",
  "POS_TESTE_RESPONDIDO",
];

export const DefaultPages: DefaultPage[] = ["PRE", "AULA", "POS"];

export const LESSON_NAMES = keys(content);

export const drawerWidth = 240;
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";
import content from "../contents.json";
import forOwn from "lodash/forOwn";
import ProgressoEnum, { ProgressoEnumDefault } from "../@types/ProgressoEnum";
import { assignToAllProperties } from "../utils";
import currentLessonAtom from "./currentLessonAtom";

const progressoLicaoAtom = atomWithStorage(
  "progresso",
  // Cria um mapa/dicionário associando o nome de cada lição com o progresso do usuário para aquela lição (ex. se ele já respondeu o pré-teste, se ele já viu o gabarito etc.)
  assignToAllProperties(content, ProgressoEnumDefault)
);

export type EditarProgressoLicaoAction = {
  lessonTitle: string;
  state: ProgressoEnum;
};

export const editarProgressoLicaoAtom = atom(
  (get: any) => get(progressoLicaoAtom)[get(currentLessonAtom)],
  (get: any, set: any, { lessonTitle, state }: EditarProgressoLicaoAction) => {
    let respostas = {
      ...get(progressoLicaoAtom),
      ...{ [slugify(lessonTitle)]: state },
    };
    set(progressoLicaoAtom, respostas);
  }
);

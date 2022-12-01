import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";
import content from "../contents.json";
import LessonStateEnum, { LessonStateDefault } from "../@types/LessonStateEnum";
import { assignToAllProperties } from "../utils";
import currentLessonAtom from "./currentLessonAtom";

const lessonStateAtom = atomWithStorage(
  "lessonState",
  // Cria um mapa/dicionário associando o nome de cada lição com o lessonState do usuário para aquela lição (ex. se ele já respondeu o pré-teste, se ele já viu o gabarito etc.)
  assignToAllProperties(content, LessonStateDefault)
);

export type EditLessonStateAction = {
  lessonTitle: string;
  state: LessonStateEnum;
};

export const editLessonStateAtom = atom(
  (get: any) => get(lessonStateAtom)[get(currentLessonAtom)],
  (get: any, set: any, { lessonTitle, state }: EditLessonStateAction) => {
    let respostas = {
      ...get(lessonStateAtom),
      ...{ [slugify(lessonTitle)]: state },
    };
    set(lessonStateAtom, respostas);
  }
);

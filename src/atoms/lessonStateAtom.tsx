import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";
import content from "../contents.json";
import LessonStateEnum, { LessonStateDefault } from "../@types/LessonStateEnum";
import { assignToAllProperties } from "../utils";
import currentLessonAtom from "./currentLessonAtom";

const lessonTitleToStateAtom = atomWithStorage(
  "lessonState",
  // Cria um mapa/dicionário associando o nome de cada lição com o lessonState do usuário para aquela lição (ex. se ele já respondeu o pré-teste, se ele já viu o gabarito etc.)
  assignToAllProperties(content, LessonStateDefault)
);

export const lessonStateAtom = atom(
  (get: any) => get(lessonTitleToStateAtom)[get(currentLessonAtom)],
  (get: any, set: any, nextState: LessonStateEnum) => {
    let respostas = {
      ...get(lessonTitleToStateAtom),
      ...{ [get(currentLessonAtom)]: nextState },
    };
    set(lessonTitleToStateAtom, respostas);
  }
);

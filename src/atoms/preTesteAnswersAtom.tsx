import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";
import currentLessonAtom from "./currentLessonAtom";

const answerByLessonAtom = atomWithStorage("respostasPreTestePorLicao", {});

export const preTesteAnswerAtom = atom(
  // @ts-ignore
  (get) => get(answerByLessonAtom)[get(currentLessonAtom)],
  (get, set, answer: string) =>
    set(answerByLessonAtom, (answerByLesson) => ({
      ...answerByLesson,
      ...{ [slugify(get(currentLessonAtom), { lower: true })]: answer },
    }))
);

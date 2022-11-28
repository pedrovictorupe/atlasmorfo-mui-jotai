import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";
import produce from "immer";

export const progressoLicaoAtom = atomWithStorage("progresso", {});

type EditarProgressoAction = {
  lessonTitle: string;
  state: "PRETESTE" | "LICAO" | "POSTESTE" | "CONCLUIDO";
};

export const editarProgressoLicaoAtom = atom(
  (get) => get(progressoLicaoAtom),
  (get, set, { lessonTitle, state }: EditarProgressoAction) => {
    let respostas = {
      ...get(progressoLicaoAtom),
      ...{ [slugify(lessonTitle)]: state },
    };
    set(progressoLicaoAtom, respostas);
  }
);

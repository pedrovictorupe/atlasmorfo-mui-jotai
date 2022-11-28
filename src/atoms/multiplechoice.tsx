import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";
import produce from "immer";
import { parseMap, stringifyMap } from "../utils";

/* Atom para salvar as respostas que o usuário submeter nos pré-testes.*/
export const respostasAtom = atomWithStorage("respostasPorLicao", {});

/* Tipagem para os argumentos da função Write de editarRespostasAtom */
type EditarRespostasAction = {
  lessonTitle: string;
  resposta: number;
};

/* Atom para salvar a resposta do usuário no localStorage.
A ideia é que a resposta só seja checada depois do usuário assistir à lição.
Como a intenção é que o progresso do usuário também fique salvo em forma de cookie (já que o site é estático e não há backend), então o localStorage serve aqui simultaneamente como global state e database */
export const editarRespostasAtom = atom(
  (get) => get(respostasAtom),
  (get, set, { lessonTitle, resposta }: EditarRespostasAction) => {
    let respostas = {
      ...get(respostasAtom),
      ...{ [slugify(lessonTitle)]: resposta },
    };
    set(respostasAtom, respostas);
  }
);
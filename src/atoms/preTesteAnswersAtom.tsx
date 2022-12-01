import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";

/* Atom para salvar as respostas que o usuário submeter nos pré-testes.*/
export const preTesteAnswersAtom = atomWithStorage(
  "respostasPreTestePorLicao",
  {}
);

/* Tipagem para os argumentos da função Write de editarRespostasAtom */
export type EditAnswersAction = {
  lessonTitle: string;
  resposta: string;
};

/* Atom para salvar a resposta do usuário no localStorage.
A ideia é que a resposta só seja checada depois do usuário assistir à lição.
Como a intenção é que o lessonState do usuário também fique salvo em forma de cookie (já que o site é estático e não há backend), então o localStorage serve aqui simultaneamente como global state e database */
export const editPreTesteAnswerAtom = atom(
  (get: any) => (lessonTitle: string) =>
    get(preTesteAnswersAtom)[slugify(lessonTitle)],
  (get: any, set: any, { lessonTitle, resposta }: EditAnswersAction) => {
    let respostas = {
      ...get(preTesteAnswersAtom),
      ...{ [slugify(lessonTitle, { lower: true })]: resposta },
    };
    set(preTesteAnswersAtom, respostas);
  }
);

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";

/* Atom para salvar as respostas que o usuário submeter nos pré-testes.*/
export const preTesteRespostasAtom = atomWithStorage(
  "respostasPreTestePorLicao",
  {}
);

/* Tipagem para os argumentos da função Write de editarRespostasAtom */
type EditarRespostasAction = {
  lessonTitle: string;
  resposta: string;
};

/* Atom para salvar a resposta do usuário no localStorage.
A ideia é que a resposta só seja checada depois do usuário assistir à lição.
Como a intenção é que o progresso do usuário também fique salvo em forma de cookie (já que o site é estático e não há backend), então o localStorage serve aqui simultaneamente como global state e database */
export const editarRespostaPreTesteAtom = atom(
  // Pra fazer: testar se dá para trocar isto por null
  (get) => get(preTesteRespostasAtom),
  (get, set, { lessonTitle, resposta }: EditarRespostasAction) => {
    let respostas = {
      ...get(preTesteRespostasAtom),
      ...{ [slugify(lessonTitle, { lower: true })]: resposta },
    };
    set(preTesteRespostasAtom, respostas);
  }
);

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

/* Atom para salvar as respostas que o usuário submeter nos pre-testes.*/
export const respostasAtom = atomWithStorage<number[]>(
  "respostas",
  [] as number[]
);

/* Tipagem para os argumentos da função Write de editarRespostasAtom */
type EditarRespostasAction = {
  id: number;
  resposta: number;
};

/* Atom para salvar a resposta do usuário no localStorage.
A ideia é que a resposta só seja checada depois do usuário assistir à lição.
Como a intenção é que o progresso do usuário também fique salvo em forma de cookie (já que o site é estático e não há backend), então o localStorage serve aqui simultaneamente como global state e database */
export const editarRespostasAtom = atom(
  (get) => get(respostasAtom),
  (get, set, { id, resposta }: EditarRespostasAction) => {
    // Variável temporária
    let respostas = [...get(respostasAtom)];
    respostas[id] = resposta;

    return set(respostasAtom, respostas);
  }
);

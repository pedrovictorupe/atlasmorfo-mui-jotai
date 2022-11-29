import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";

// Se todos os Pre-testes usarem este atom para saber se estão lockados, então todos vão re-renderizar?
const preTesteLocksAtom = atomWithStorage("preTesteLocks", {});

export const lockPreTesteAtom = atom(
  null,
  (_get, set, lessonTitle: string) => {
    set(preTesteLocksAtom, (prev: Readonly<Object>) => {
      let next = prev;
      // @ts-ignore
      next[slugify(lessonTitle)] = "LOCKED";
      return next;
    });
  }
);

export const unlockPreTesteAtom = atom(
  null,
  (_get, set, lessonTitle: string) => {
    set(preTesteLocksAtom, (prev: Readonly<Object>) => {
      let next = prev;
      // @ts-ignore
      next[slugify(lessonTitle)] = "UNLOCKED";
      return next;
    });
  }
);

export const isPreTesteLockedAtom = atom(
  (get: any, _set: any, lessonTitle: string) =>
    get(preTesteLocksAtom)[slugify(lessonTitle)]
);

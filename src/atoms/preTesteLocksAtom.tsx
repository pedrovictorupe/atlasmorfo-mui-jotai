import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import slugify from "slugify";
import currentLessonAtom from "./currentLessonAtom";

// Se todos os Pre-testes usarem este atom para saber se estão lockados, então todos vão re-renderizar?
const preTesteLocksAtom = atomWithStorage("preTesteLocks", {});

export const lockPreTesteAtom = atom(null, (_get, set) => {
  set(preTesteLocksAtom, (prev: Readonly<Object>) => {
    let next = prev;
    // @ts-ignore
    next[slugify(get(currentLessonAtom))] = "LOCKED";
    return next;
  });
});

export const unlockPreTesteAtom = atom(null, (_get, set) => {
  set(preTesteLocksAtom, (prev: Readonly<Object>) => {
    let next = prev;
    // @ts-ignore
    next[slugify(get(currentLessonAtom))] = "UNLOCKED";
    return next;
  });
});

export const isPreTesteLockedAtom = atom(
  (get: any, _set: any) =>
    get(preTesteLocksAtom)[slugify(get(currentLessonAtom))]
);

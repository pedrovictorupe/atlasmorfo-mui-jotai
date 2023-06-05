import { SetStateAction, useAtom } from "jotai";
import { InformativeBoxWord } from "../boxes";
import React, { ReactElement } from "react";
import informativeBoxAtom from "../atoms/informativeBoxAtom";

export default ({
  word,
  children,
}: {
  word: InformativeBoxWord;
  children: string;
}) => {
  const [informativeBoxWord, setInformativeBoxWord] =
    useAtom(informativeBoxAtom);

  return (
    <div
      style={{
        display: "inline-block",
        color: "mediumblue",
        cursor: "pointer",
      }}
      onClick={() => setInformativeBoxWord(word)}
    >
      { children }
    </div>
  );
};

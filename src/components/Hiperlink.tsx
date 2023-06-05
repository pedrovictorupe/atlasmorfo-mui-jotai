import { SetStateAction, useAtom } from "jotai";
import { DefinitionModalWord } from "../definitionModals";
import React, { ReactElement } from "react";
import informativeBoxAtom from "../atoms/informativeBoxAtom";

export default ({
  word,
  children,
}: {
  word: DefinitionModalWord;
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
      {children}
    </div>
  );
};

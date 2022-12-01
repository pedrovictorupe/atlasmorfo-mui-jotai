import { useSetAtom } from "jotai";
import React from "react";
import { lessonStateAtom } from "../atoms/lessonStateAtom";
import DefaultDialog from "./DefaultDarkDialog";

export default ({
  open,
  onClose,
  title,
  content,
  backgroundDarkColor,
}: IProps) => {
  const changeLessonState = useSetAtom(lessonStateAtom);

  return (
    <DefaultDialog
      open={open}
      onClose={() => {
        changeLessonState("GABARITO_PRETESTE_VISUALIZADO");
        onClose();
      }}
      title={title}
      content={content}
      backgroundDarkColor={backgroundDarkColor}
    />
  );
};

type IProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
  backgroundDarkColor: string;
};

import { useAtom } from "jotai";
import React from "react";
import LessonStateEnum from "../@types/LessonStateEnum";
import {
  EditLessonStateAction,
  editLessonStateAtom,
} from "../atoms/lessonStateAtom";
import DefaultDialog from "./DefaultDialog";

export default (props: {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
  backgroundDarkColor: string;
  lessonTitle: string;
}) => {
  const [, editarProgresso]: [
    LessonStateEnum,
    (update: EditLessonStateAction) => void
  ] = useAtom(editLessonStateAtom);

  return (
    <DefaultDialog
      open={props.open}
      onClose={() => {
        editarProgresso({
          lessonTitle: props.lessonTitle,
          state: "GABARITO_PRETESTE_VISUALIZADO",
        });
        props.onClose();
      }}
      title={props.title}
      content={props.content}
      backgroundDarkColor={props.backgroundDarkColor}
    />
  );
};

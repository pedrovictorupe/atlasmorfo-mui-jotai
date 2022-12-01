import { useAtom, useSetAtom } from "jotai";
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
  const changeLessonState = useSetAtom(editLessonStateAtom);

  return (
    <DefaultDialog
      open={props.open}
      onClose={() => {
        changeLessonState({
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

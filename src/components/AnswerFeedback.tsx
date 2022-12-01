import { useSetAtom } from "jotai";
import React from "react";
import { lessonStateAtom } from "../atoms/lessonStateAtom";
import DefaultDialog from "./DefaultDarkDialog";

export default (props: {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
  backgroundDarkColor: string;
}) => {
  const changeLessonState = useSetAtom(lessonStateAtom);

  return (
    <DefaultDialog
      open={props.open}
      onClose={() => {
        changeLessonState("GABARITO_PRETESTE_VISUALIZADO");
        props.onClose();
      }}
      title={props.title}
      content={props.content}
      backgroundDarkColor={props.backgroundDarkColor}
    />
  );
};

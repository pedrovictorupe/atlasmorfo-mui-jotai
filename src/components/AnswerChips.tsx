import { Chip } from "@mui/material";
import React from "react";
import contents from "../contents.json";
import slugify from "slugify";
import { useAtom } from "jotai";
import {
  EditAnswersAction,
  editPreTesteAnswerAtom,
} from "../atoms/preTesteAnswersAtom";

// const BaseChip = (props: { label: string }) => (
//   <Chip
//     variant="outlined"
//     color="warning"
//     label={props.label}
//     sx={{ margin: 2 }}
//   />
// );

export const CorrectAnswerChip = (props: { lessonTitle: string }) => (
  <Chip
    variant="outlined"
    label={
      // @ts-ignore
      contents[slugify(props.lessonTitle, { lower: true })].respostaCorreta
    }
    sx={{ margin: 2, color: "#fff", borderWidth: 2, borderColor: "#fff" }}
  />
);

export const SelectedAnswerChip = (props: { lessonTitle: string }) => {
  const [getAnswerByLesson]: [
    (lessonTitle: string) => string,
    (update: EditAnswersAction) => void
  ] = useAtom(editPreTesteAnswerAtom);

  return (
    <Chip
      variant="outlined"
      color="warning"
      label={getAnswerByLesson(slugify(props.lessonTitle))}
      sx={{ margin: 2 }}
    />
  );
};

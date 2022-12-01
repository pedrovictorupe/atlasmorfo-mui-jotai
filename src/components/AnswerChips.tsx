import { Chip } from "@mui/material";
import React from "react";
import contents from "../contents.json";
import slugify from "slugify";
import { useAtom } from "jotai";
import {
  currentLessonPreTesteAnswerAtom,
  EditAnswersAction,
  editPreTesteAnswerAtom,
} from "../atoms/preTesteAnswersAtom";
import currentLessonAtom from "../atoms/currentLessonAtom";

export const CorrectAnswerChip = () => {
  const [currentLessonTitle] = useAtom(currentLessonAtom);

  return (
    <Chip
      variant="outlined"
      label={
        // @ts-ignore
        contents[slugify(currentLessonTitle, { lower: true })].respostaCorreta
      }
      sx={{ margin: 2, color: "#fff", borderWidth: 2, borderColor: "#fff" }}
    />
  );
};

export const SelectedAnswerChip = () => {
  const currentPreTesteAnswer = useAtom(currentLessonPreTesteAnswerAtom);

  return (
    <Chip
      variant="outlined"
      color="warning"
      label={currentPreTesteAnswer}
      sx={{ margin: 2 }}
    />
  );
};

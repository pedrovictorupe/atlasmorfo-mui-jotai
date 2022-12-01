import {
  Dialog,
  DialogContent,
  Alert,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { SelectedAnswerChip } from "./AnswerChips";
import contents from "../contents.json";
import slugify from "slugify";
import {
  EditLessonStateAction,
  editLessonStateAtom,
} from "../atoms/lessonStateAtom";
import AnswerReviewState from "../@types/AnswerReviewState";
import DefaultPage from "../@types/DefaultPage";
import { useAtom, useSetAtom } from "jotai";
import LessonStateEnum from "../@types/LessonStateEnum";
import {
  EditAnswersAction,
  editPreTesteAnswerAtom,
} from "../atoms/preTesteAnswersAtom";

type IProps = {
  open: boolean;
  lessonTitle: string;
  selectedAnswer: string;
  setAnswerReviewState: (newState: AnswerReviewState) => void;
  setCurrentTab: (nextTab: DefaultPage) => void;
};

export default ({
  open,
  lessonTitle,
  selectedAnswer,
  setAnswerReviewState,
  setCurrentTab,
}: IProps) => {
  const [isAnswerReviewOpen, setAnswerReviewOpen] = useState(true);
  const changeLessonState = useSetAtom(editLessonStateAtom);

  return (
    <Dialog
      open={open && isAnswerReviewOpen}
      onClose={() => setAnswerReviewOpen(false)}
    >
      <DialogContent>
        <div
          style={{
            textAlign: "center",
          }}
        >
          Na seção anterior, você assinalou a seguinte alternativa:
          <br />
          <SelectedAnswerChip lessonTitle={slugify(lessonTitle)} />
          <br />
          Com os conhecimentos que você acabou de obter, deseja alterar sua
          resposta?
        </div>
        <Alert
          variant="outlined"
          color="info"
          sx={{
            margin: 2,
          }}
        >
          <strong>Enunciado:</strong> {/* @ts-ignore */}
          {contents[slugify(lessonTitle)].pergunta}
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            setAnswerReviewOpen(false);

            if (
              // @ts-ignore
              selectedAnswer === contents[slugify(lessonTitle)].respostaCorreta
            ) {
              setAnswerReviewState("CORRECT");
            } else {
              setAnswerReviewState("INCORRECT");
            }
          }}
        >
          Manter
        </Button>
        <Button
          color="error"
          onClick={() => {
            changeLessonState({
              lessonTitle: slugify(lessonTitle),
              state: "MUDANDO_RESPOSTA",
            });
            setCurrentTab("PRE");
          }}
        >
          Alterar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

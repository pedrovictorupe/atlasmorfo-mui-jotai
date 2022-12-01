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
import { lessonStateAtom } from "../atoms/lessonStateAtom";
import AnswerReviewState from "../@types/AnswerReviewState";
import DefaultTab from "../@types/DefaultPage";
import { useAtom, useSetAtom } from "jotai";
import { currentLessonPreTesteAnswerAtom } from "../atoms/preTesteAnswersAtom";
import currentLessonAtom from "../atoms/currentLessonAtom";

type IProps = {
  open: boolean;
  setAnswerReviewState: (newState: AnswerReviewState) => void;
  setCurrentTab: (nextTab: DefaultTab) => void;
};

export default ({ open, setAnswerReviewState, setCurrentTab }: IProps) => {
  const [isAnswerReviewOpen, setAnswerReviewOpen] = useState(true);
  const [currentPreTesteAnswer] = useAtom(currentLessonPreTesteAnswerAtom);
  const setLessonState = useSetAtom(lessonStateAtom);
  const [currentLessonTitle] = useAtom(currentLessonAtom);

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
          <SelectedAnswerChip />
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
          {contents[slugify(currentLessonTitle)].pergunta}
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            setAnswerReviewOpen(false);

            if (
              currentPreTesteAnswer ===
              // @ts-ignore
              contents[slugify(currentLessonTitle)].respostaCorreta
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
            setLessonState("MUDANDO_RESPOSTA");
            setCurrentTab("PRE");
          }}
        >
          Alterar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

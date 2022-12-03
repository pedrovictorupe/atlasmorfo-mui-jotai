import {
  Dialog,
  DialogContent,
  Alert,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";
import { SelectedAnswerChip } from "./AnswerChips";
import contents from "../contents.json";
import slugify from "slugify";
import { lessonStateAtom } from "../atoms/lessonStateAtom";
import AnswerReviewState from "../@types/AnswerReviewState";
import DefaultTab from "../@types/DefaultTab";
import { useAtom, useSetAtom } from "jotai";
import { preTesteAnswerAtom } from "../atoms/preTesteAnswersAtom";
import currentLessonAtom from "../atoms/currentLessonAtom";

type IProps = {
  answerReviewState: AnswerReviewState;
  setAnswerReviewState: (newState: AnswerReviewState) => void;
  setCurrentTab: (nextTab: DefaultTab) => void;
};

export default ({
  answerReviewState,
  setAnswerReviewState,
  setCurrentTab,
}: IProps) => {
  const [currentPreTesteAnswer] = useAtom(preTesteAnswerAtom);
  const setLessonState = useSetAtom(lessonStateAtom);
  const [currentLessonTitle] = useAtom(currentLessonAtom);

  return (
    <Dialog
      open={answerReviewState == "CHECKING"}
      onClose={() => setAnswerReviewState("UNTRIGGERED")}
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

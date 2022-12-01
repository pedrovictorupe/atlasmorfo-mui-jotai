import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";
import { useAtom } from "jotai";
import React, { useState } from "react";
import DefaultTab from "../../@types/DefaultPage";
import LessonStateEnum from "../../@types/LessonStateEnum";
import {
  EditAnswersAction,
  editPreTesteAnswerAtom,
} from "../../atoms/preTesteAnswersAtom";
import {
  EditLessonStateAction,
  editLessonStateAtom,
} from "../../atoms/lessonStateAtom";
import {
  SelectedAnswerChip,
  CorrectAnswerChip,
} from "../../components/AnswerChips";
import AnswerFeedback from "../../components/AnswerFeedback";
import NextTabButton from "../../components/NextTabButton";
import PageTitle from "../../components/PageTitle";
import Paragraph from "../../components/Paragraph";
import contents from "../../contents.json";
import PreTestePostConfirmDialog from "../../components/PreTestePostConfirmDialog";
import IncorrectAnswerDialog from "../../components/IncorrectAnswerDialog";
import CorrectAnswerDialog from "../../components/CorrectAnswerDialog";
import AnswerReviewState from "../../@types/AnswerReviewState";
import AnswerReviewDialog from "../../components/AnswerReviewDialog";
import YoutubeVideo from "../../components/YoutubeVideo";

export default ({ setCurrentTab }: IProps): JSX.Element | null => {
  const [answerReviewState, setAnswerReviewState] =
    useState<AnswerReviewState>("UNTRIGGERED");
  const [getAnswerByLesson]: [
    (lessonTitle: string) => string,
    (update: EditAnswersAction) => void
  ] = useAtom(editPreTesteAnswerAtom);
  const [lessonState, changeLessonState]: [
    LessonStateEnum,
    (update: EditLessonStateAction) => void
  ] = useAtom(editLessonStateAtom);

  return (
    <>
      <PreTestePostConfirmDialog lessonState={lessonState} />
      <div style={{ padding: "5vw" }}>
        <PageTitle>As crônicas de Joãozinho</PageTitle>
        <Paragraph>
          Chegou a hora de você conhecer nosso protagonista!
        </Paragraph>
        <Paragraph>
          Joãozinho é um menino travesso que será o cobaia perfeito para a nossa
          aventura. Ele tem uma certa propensão a não olhar para onde anda,
          então é bem provável que ele ostente um machucão ou outro que a gente
          possa acompanhar para o nosso projeto.
        </Paragraph>
        <Paragraph>
          Dê uma espiadinha aqui no vídeo que preparamos para você e aproveite
          para tentar encontrar a resposta para o quiz anterior.
        </Paragraph>
        <Paragraph />
        {/* Proporção: width="560" height="315" (7:9)*/}
        <YoutubeVideo src="https://www.youtube.com/embed/IGmYTjpWSa4" />
        <NextTabButton
          onClick={() => {
            setAnswerReviewState("CHECKING");
          }}
        />
        <AnswerReviewDialog
          open={answerReviewState == "CHECKING"}
          selectedAnswer={getAnswerByLesson(LESSON_TITLE)}
          setAnswerReviewState={setAnswerReviewState}
          setCurrentTab={setCurrentTab}
          lessonTitle={LESSON_TITLE}
        />
        <CorrectAnswerDialog
          open={answerReviewState == "CORRECT"}
          setCurrentTab={setCurrentTab}
        />
        <IncorrectAnswerDialog
          open={answerReviewState == "INCORRECT"}
          setCurrentTab={setCurrentTab}
          lessonTitle={"joao-e-as-etapas-da-hemostasia"}
        />
      </div>
    </>
  );
};

type IProps = {
  setCurrentTab: React.Dispatch<React.SetStateAction<DefaultTab>>;
};

const LESSON_TITLE = "joao-e-as-etapas-da-hemostasia";

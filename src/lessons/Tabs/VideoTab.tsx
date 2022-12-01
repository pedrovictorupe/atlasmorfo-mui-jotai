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
import NextTabButton from "../../components/NextTabButton";
import PageTitle from "../../components/PageTitle";
import Paragraph from "../../components/Paragraph";
import PreTestePostConfirmDialog from "../../components/PreTestePostConfirmDialog";
import IncorrectAnswerDialog from "../../components/IncorrectAnswerDialog";
import CorrectAnswerDialog from "../../components/CorrectAnswerDialog";
import AnswerReviewState from "../../@types/AnswerReviewState";
import AnswerReviewDialog from "../../components/AnswerReviewDialog";
import YoutubeVideo from "../../components/YoutubeVideo";
import contents from "../../contents.json";
import { map } from "lodash";

export default ({ setCurrentTab }: IProps): JSX.Element | null => {
  const [answerReviewState, setAnswerReviewState] =
    useState<AnswerReviewState>("UNTRIGGERED");
  const [getAnswerByLesson]: [
    (lessonTitle: string) => string,
    (update: EditAnswersAction) => void
  ] = useAtom(editPreTesteAnswerAtom);
  const [lessonState]: [
    LessonStateEnum,
    (update: EditLessonStateAction) => void
  ] = useAtom(editLessonStateAtom);

  return (
    <>
      <PreTestePostConfirmDialog lessonState={lessonState} />
      <div style={{ padding: "5vw" }}>
        <PageTitle>As crônicas de Joãozinho</PageTitle>
        {contents["joao-e-as-etapas-da-hemostasia"].abaVideo.paragrafos.map(
          (paragraph) => (
            <Paragraph>{paragraph}</Paragraph>
          )
        )}
        <Paragraph />
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
  setCurrentTab: (nextTab: DefaultTab) => void;
};

const LESSON_TITLE = "joao-e-as-etapas-da-hemostasia";

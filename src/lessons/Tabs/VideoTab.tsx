import { useAtom } from "jotai";
import React, { useState } from "react";
import DefaultTab from "../../@types/DefaultPage";
import { currentLessonPreTesteAnswerAtom } from "../../atoms/preTesteAnswersAtom";
import { lessonStateAtom } from "../../atoms/lessonStateAtom";
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

export default ({ setCurrentTab }: IProps): JSX.Element | null => {
  const [answerReviewState, setAnswerReviewState] =
    useState<AnswerReviewState>("UNTRIGGERED");
  const currentPreTesteAnswer = useAtom(currentLessonPreTesteAnswerAtom);
  const [lessonState] = useAtom(lessonStateAtom);

  return (
    <>
      <PreTestePostConfirmDialog lessonState={lessonState} />
      <div style={{ padding: "5vw" }}>
        <PageTitle>As crônicas de Joãozinho</PageTitle>
        {contents["joao-e-as-etapas-da-hemostasia"].abaVideo.paragrafos.map(
          (paragraph) => (
            <Paragraph key={paragraph.slice(0, 5)}>{paragraph}</Paragraph>
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
          setAnswerReviewState={setAnswerReviewState}
          setCurrentTab={setCurrentTab}
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

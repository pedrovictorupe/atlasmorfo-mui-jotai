import { useAtom } from "jotai";
import React, { useState } from "react";
import DefaultTab from "../../../@types/DefaultTab";
import { preTesteAnswerAtom } from "../../../atoms/preTesteAnswersAtom";
import { lessonStateAtom } from "../../../atoms/lessonStateAtom";
import NextTabButton from "../../../components/NextTabButton";
import PageTitle from "../../../components/PageTitle";
import Paragraph from "../../../components/Paragraph";
import PreTestePostConfirmDialog from "../../../components/PreTestePostConfirmDialog";
import IncorrectAnswerDialog from "../../../components/IncorrectAnswerDialog";
import CorrectAnswerDialog from "../../../components/CorrectAnswerDialog";
import AnswerReviewState from "../../../@types/AnswerReviewState";
import AnswerReviewDialog from "../../../components/AnswerReviewDialog";
import YoutubeVideo from "../../../components/YoutubeVideo";
import contents from "../../../contents.json";

export default ({ setCurrentTab }: IProps): JSX.Element | null => {
  const [answerReviewState, setAnswerReviewState] =
    useState<AnswerReviewState>("UNTRIGGERED");
  const [lessonState] = useAtom(lessonStateAtom);

  console.log(answerReviewState);

  return (
    <>
      <PreTestePostConfirmDialog lessonState={lessonState} />
      <div style={{ padding: "5vw" }}>
        <PageTitle>As crônicas de Joãozinho</PageTitle>
        {paragraphs.map((paragraph) => (
          <Paragraph key={paragraph.slice(0, 5)}>{paragraph}</Paragraph>
        ))}
        <Paragraph />
        <YoutubeVideo src="https://www.youtube.com/embed/IGmYTjpWSa4" />
        <NextTabButton
          onClick={() => {
            setAnswerReviewState("CHECKING");
          }}
        />
        <AnswerReviewDialog
          answerReviewState={answerReviewState}
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

const paragraphs = [
  "Chegou a hora de você conhecer nosso protagonista!",
  "Joãozinho é um menino travesso que será o cobaia perfeito para a nossa aventura. Ele tem uma certa propensão a não olhar para onde anda, então é bem provável que ele ostente um machucão ou outro que a gente possa acompanhar para o nosso projeto.",
  "Dê uma espiadinha aqui no vídeo que preparamos para você e aproveite para tentar encontrar a resposta para o quiz anterior.",
];

type IProps = {
  setCurrentTab: (nextTab: DefaultTab) => void;
};

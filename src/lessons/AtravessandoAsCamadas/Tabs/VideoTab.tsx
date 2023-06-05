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
        <PageTitle>Joãozinho, ajude-nos novamente!</PageTitle>
        <Paragraph>
          Agora, vamos voltar a tirar proveito do infortúnio do nosso amigo João
          para estudar com profundidade as peculiaridades das camadas teciduais
          atingidas pela lesão.
        </Paragraph>
        <Paragraph>
          Assista ao vídeo e, em seguida, avalie sua resposta anterior e tente
          adivinhar a segunda palavra misteriosa desta unidade!
        </Paragraph>
        <Paragraph />
        <YoutubeVideo src="https://www.youtube.com/embed/G2RmUBIBNqs" />
        <YoutubeVideo src="https://www.youtube.com/embed/oe-7PcECTz4" />
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

type IProps = {
  setCurrentTab: (nextTab: DefaultTab) => void;
};

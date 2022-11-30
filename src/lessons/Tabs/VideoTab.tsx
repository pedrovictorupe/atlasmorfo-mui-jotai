import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";
import { green, yellow } from "@mui/material/colors";
import { useAtom } from "jotai";
import React, { useState } from "react";
import DefaultPage from "../../@types/DefaultPage";
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

export default (props: {
  setPaginaAtual: React.Dispatch<React.SetStateAction<DefaultPage>>;
}): JSX.Element | null => {
  const [isAnswerReviewOpen, setAnswerReviewOpen] = useState(false);
  const [isCongratulationOpen, setCongratulationsOpen] = useState(false);
  const [isAnswerIncorrectOpen, setAnswerIncorrectOpen] = useState(false);
  const [getAnswerByLesson]: [
    (lessonTitle: string) => string,
    (update: EditAnswersAction) => void
  ] = useAtom(editPreTesteAnswerAtom);
  const [progresso, editarProgresso]: [
    LessonStateEnum,
    (update: EditLessonStateAction) => void
  ] = useAtom(editLessonStateAtom);
  const [isExplanationDialogOpen, setExplanationDialogOpen] = useState(true);

  return (
    <>
      <Dialog
        open={isExplanationDialogOpen && progresso == "PRETESTE_RESPONDIDO"}
        onClose={() => {
          setExplanationDialogOpen(false);
        }}
      >
        <DialogContent>
          <DialogContentText>
            Sua resposta não será checada imediatamente. Você terá a chance de
            mudá-la após assistir ao vídeo da próxima sessão.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setExplanationDialogOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
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
        <div style={{ textAlign: "center", marginBottom: "3vh" }}>
          <iframe
            src="https://www.youtube.com/embed/IGmYTjpWSa4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <NextTabButton
          onClick={() => {
            setAnswerReviewOpen(true);
          }}
        />
        <Dialog
          open={isAnswerReviewOpen}
          onClose={() => setAnswerReviewOpen(false)}
        >
          <DialogContent>
            <div style={{ textAlign: "center" }}>
              Na seção anterior, você assinalou a seguinte alternativa:
              <br />
              <SelectedAnswerChip lessonTitle="joao-e-as-etapas-da-hemostasia" />
              <br />
              Com os conhecimentos que você acabou de obter, deseja alterar sua
              resposta?
            </div>
            <Alert variant="outlined" color="info" sx={{ margin: 2 }}>
              <strong>Enunciado:</strong>{" "}
              {contents["joao-e-as-etapas-da-hemostasia"].pergunta}
            </Alert>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                setAnswerReviewOpen(false);

                if (
                  getAnswerByLesson("joao-e-as-etapas-da-hemostasia") ===
                  contents["joao-e-as-etapas-da-hemostasia"].respostaCorreta
                ) {
                  setCongratulationsOpen(true);
                } else {
                  setAnswerIncorrectOpen(true);
                }
              }}
            >
              Manter
            </Button>
            <Button
              color="error"
              onClick={() => {
                editarProgresso({
                  lessonTitle: "joao-e-as-etapas-da-hemostasia",
                  state: "MUDANDO_RESPOSTA",
                });

                props.setPaginaAtual("PRE");
              }}
            >
              Alterar
            </Button>
          </DialogActions>
        </Dialog>
        <AnswerFeedback
          open={isCongratulationOpen}
          onClose={() => {
            setCongratulationsOpen(false);
            props.setPaginaAtual("POS");
          }}
          title={"Parabéns!"}
          content={
            <>
              Resposta correta.
              <br />
              Joãozinho deve estar orgulhoso {":)"}
            </>
          }
          backgroundDarkColor={green[700]}
          lessonTitle="joao-e-as-etapas-da-hemostasia"
        />
        <AnswerFeedback
          open={isAnswerIncorrectOpen}
          onClose={() => {
            setAnswerIncorrectOpen(false);
            props.setPaginaAtual("POS");
          }}
          title={"Quase isso"}
          content={
            <>
              A resposta correta era
              <br />
              <CorrectAnswerChip lessonTitle="joao-e-as-etapas-da-hemostasia" />
            </>
          }
          backgroundDarkColor={yellow[800]}
          lessonTitle="joao-e-as-etapas-da-hemostasia"
        />
      </div>
    </>
  );
};

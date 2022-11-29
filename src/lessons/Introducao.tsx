import React from "react";
import { useState } from "react";
import PreTeste from "../components/PreTeste";
import preTesteContents from "../contents.json";
import {
  Alert,
  BottomNavigation,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import MultipleChoiceQuiz from "../components/MultipleChoiceQuiz";
import BottomNavBar from "../components/BottomNavBar";
import { DEFAULT_PAGES } from "../constants";
import DefaultPage from "../@types/DefaultPage";
import Image from "mui-image";
import Paragraph from "../components/Paragraph";
import ProgressoEnum from "../@types/ProgressoEnum";
import {
  ArrowForward,
  Lightbulb,
  Lock,
  PsychologyAlt,
  SmartDisplay,
  TipsAndUpdates,
} from "@mui/icons-material";
import {
  EditarProgressoLicaoAction,
  editarProgressoLicaoAtom,
} from "../atoms/progressoLicaoAtom";
import { useAtom } from "jotai";
import PageTitle from "../components/PageTitle";
import {
  editarRespostaPreTesteAtom,
  EditarRespostasAction,
} from "../atoms/preTesteRespostasAtom";
import { green, yellow } from "@mui/material/colors";
import AnswerFeedback from "../components/AnswerFeedback";
import {
  CorrectAnswerChip,
  SelectedAnswerChip,
} from "../components/AnswerChips";

const LESSON_NAME = "introducao";
export default function Introducao() {
  const [progresso, editarProgresso]: [
    ProgressoEnum,
    (update: EditarProgressoLicaoAction) => void
  ] = useAtom(editarProgressoLicaoAtom);
  const [paginaAtual, setPaginaAtual] = useState<DefaultPage>(DEFAULT_PAGES[0]);
  const [isAnswerReviewOpen, setAnswerReviewOpen] = useState(false);
  const [isCongratulationOpen, setCongratulationsOpen] = useState(false);
  const [isAnswerIncorrectOpen, setAnswerIncorrectOpen] = useState(false);
  const [getAnswerByLesson, editAnswerByLesson]: [
    (lessonTitle: string) => string,
    (update: EditarRespostasAction) => void
  ] = useAtom(editarRespostaPreTesteAtom);

  let render: JSX.Element | null = null;

  switch (paginaAtual) {
    case "INTRO":
      render = (
        <>
          <Container sx={{ overflowY: "auto" }}>
            <PageTitle>
              Nação <br /> Methiolate
            </PageTitle>
            <Grid container direction="column" alignItems="center">
              <Image
                src="joelho-ralado-COPYRIGHT.jpg"
                width="90%"
                height="auto"
                // @ts-ignore
                sx={{ p: 2 }}
              ></Image>
              <Paragraph fontStyle={"italic"}>
                Todo mundo já ralou o joelho alguma vez na vida, né?
              </Paragraph>
            </Grid>
            <Paragraph>
              Seja caindo da biscicleta, seja cortando-se enquanto cozinha... o
              fato é: machucar-se é um acontecimento comum na vida de todo
              mundo. Tão comum que é bem possível que você nunca tenha dado
              muita bola quando acontece, não é? "É só pegar um curativo e vida
              que segue..."
            </Paragraph>
            <Paragraph>
              No entanto, se você parar por um segundo e se aprofundar, você
              logo descobrirá toda a complexidade que esse fenômeno tem para
              oferecer.
            </Paragraph>
            <Paragraph>
              Desde a resposta inicial rápida dos vários tipos celulares do
              organismo até a resolução definitiva do coágulo, a fisiologia das
              lesões superficiais é um mundo à parte. Por isso, eu te convido a
              uma pequena jornada por esse universo sob as lentes das diversas
              ciências biológicas.
            </Paragraph>
            <Paragraph>
              A proposta é simples: cada lição contará com uma introdução
              inicial (como esta) seguida de um "pré-teste". Essa avaliação pode
              assumir as mais diversas formas, seja um quiz, uma charada ou
              mesmo um pequeno videogame.
            </Paragraph>
            <Paragraph>
              Porém, não será o <i>app</i> que irá checar a resposta...{" "}
              <strong>será você mesmo</strong>. Em outras palavras, com o
              conhecimento que adquirir assistindo ao vídeo da lição, a
              plataforma lhe dará a oportunidade de revisar sua resposta antes
              de ir para a avaliação final. Dessa forma, você terá a chance de
              ver o quanto você aprendeu e também de consumir a aula de uma
              maneira mais ativa, caçando pontos-chave que ajudem a responder a
              questão.
            </Paragraph>
            <Paragraph>
              Por fim, no final de cada lição, haverá outro teste, porém quase
              sempre com uma proposta mais lúdica. Quem sabe o que vem por aí?
              Será uma partida de TERMO com algum jargão mencionado no vídeo?
              Será um jogo da memória de imagens e definições? Você terá a
              chance de descobrir com o progredir das lições
            </Paragraph>
            <Paragraph>No mais, é isto! Bons estudos e divirta-se!</Paragraph>
          </Container>
        </>
      );
      break;
    case "PRE":
      render = (
        <PreTeste
          quiz={
            <MultipleChoiceQuiz
              {...preTesteContents[LESSON_NAME]}
              onSubmit={() => {
                editarProgresso({
                  lessonTitle: "introducao",
                  state: "PRETESTE_RESPONDIDO",
                });
                setPaginaAtual("VIDEO");
              }}
            />
          }
        />
      );
      break;
    case "VIDEO":
      render = (
        <div style={{ padding: "5vw" }}>
          <PageTitle>As crônicas de Joãozinho</PageTitle>
          <Paragraph>
            Chegou a hora de você conhecer nosso protagonista!
          </Paragraph>
          <Paragraph>
            Joãozinho é um menino travesso que será o cobaia perfeito para a
            nossa aventura. Ele tem uma certa propensão a não olhar para onde
            anda, então é bem provável que ele ostente um machucão ou outro que
            a gente possa acompanhar para o nosso projeto.
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
          <div style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              startIcon={<ArrowForward />}
              sx={{ borderRadius: 10 }}
              onClick={() => {
                setAnswerReviewOpen(true);
              }}
            >
              Prosseguir{" "}
            </Button>
            <Dialog
              open={isAnswerReviewOpen}
              onClose={() => setAnswerReviewOpen(false)}
            >
              <DialogContent>
                <div style={{ textAlign: "center" }}>
                  Na seção anterior, você assinalou a seguinte alternativa:
                  <br />
                  <SelectedAnswerChip lessonTitle="introducao" />
                  <br />
                  Com os conhecimentos que você acabou de obter, deseja alterar
                  sua resposta?
                </div>
                <Alert variant="outlined" color="info" sx={{ margin: 2 }}>
                  <strong>Enunciado:</strong>{" "}
                  {preTesteContents.introducao.pergunta}
                </Alert>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => {
                    setAnswerReviewOpen(false);

                    if (
                      getAnswerByLesson("introducao") ===
                      preTesteContents.introducao.respostaCorreta
                    ) {
                      setCongratulationsOpen(true);
                    } else {
                      setAnswerIncorrectOpen(true);
                    }
                  }}
                >
                  Manter
                </Button>
                <Button color="error">Alterar</Button>
              </DialogActions>
            </Dialog>
            <AnswerFeedback
              open={isCongratulationOpen}
              onClose={() => setCongratulationsOpen(false)}
              title={"Parabéns!"}
              content={
                <>
                  Resposta correta.
                  <br />
                  Joãozinho deve estar orgulhoso {":)"}
                </>
              }
              backgroundDarkColor={green[700]}
              lessonTitle="introducao"
            />
            <AnswerFeedback
              open={isAnswerIncorrectOpen}
              onClose={() => setAnswerIncorrectOpen(false)}
              title={"Quase isso"}
              content={
                <>
                  A resposta correta era
                  <br />
                  <CorrectAnswerChip lessonTitle="introducao" />
                </>
              }
              backgroundDarkColor={yellow[800]}
              lessonTitle="introducao"
            />
          </div>
          {/* </Grid> */}
        </div>
      );
      break;
    case "POS":
      render = (
        <div style={{ textAlign: "center" }}>
          <iframe
            src="https://mywordle.strivemath.com/?word=bwsutrw&lang=any"
            style={{
              width: "70%",
              height: "700px",
              borderWidth: 0,
            }}
          />
        </div>
      );
      break;
  }

  return (
    <>
      <Container
        sx={{
          height: "80vh",
          overflowY: "auto",
          p: 0,
        }}
      >
        {render}
      </Container>
      {/* <BottomNavigation /> */}
      <BottomNavBar
        // DefaultPages mapeia "PRE", "AULA", "POS" para 0, 1 e 2 (pois BottomNavBar usa índices para gerenciar as abas)
        currentTab={DEFAULT_PAGES.indexOf(paginaAtual)}
        setPaginaAtual={(n: number) => setPaginaAtual(DEFAULT_PAGES[n])}
        items={[
          { label: "Intro", icon: <PsychologyAlt />, isLocked: false },
          {
            label: "Pré-teste",
            icon: progresso == "PRETESTE_RESPONDIDO" ? <Lock /> : <Lightbulb />,
            isLocked: progresso == "PRETESTE_RESPONDIDO",
          },
          { label: "Vídeo", icon: <SmartDisplay />, isLocked: false },
          { label: "Pós-teste", icon: <TipsAndUpdates />, isLocked: false },
        ]}
      />
    </>
  );
}

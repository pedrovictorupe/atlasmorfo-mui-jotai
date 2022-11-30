import React from "react";
import { useState } from "react";
import PreTeste from "../components/PreTeste";
import preTesteContents from "../contents.json";
import {
  Alert,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import MultipleChoiceQuiz from "../components/MultipleChoiceQuiz";
import { DEFAULT_PAGES } from "../constants";
import DefaultPage from "../@types/DefaultPage";
import Image from "mui-image";
import Paragraph from "../components/Paragraph";
import ProgressoEnum from "../@types/ProgressoEnum";
import { ArrowForward } from "@mui/icons-material";
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
import { blue, green, yellow } from "@mui/material/colors";
import AnswerFeedback from "../components/AnswerFeedback";
import {
  CorrectAnswerChip,
  SelectedAnswerChip,
} from "../components/AnswerChips";
import DefaultBottomNavBar from "../components/DefaultBottomNavBar";
import NextTabButton from "../components/NextTabButton";
import DefaultDialog from "../components/DefaultDialog";
import DefaultButton from "../components/DefaultButton";

const LESSON_NAME = "joao-e-as-etapas-da-hemostasia";
export default function Introducao() {
  const [progresso, editarProgresso]: [
    ProgressoEnum,
    (update: EditarProgressoLicaoAction) => void
  ] = useAtom(editarProgressoLicaoAtom);
  const [paginaAtual, setPaginaAtual] = useState<DefaultPage>(DEFAULT_PAGES[0]);
  const [isAnswerReviewOpen, setAnswerReviewOpen] = useState(false);
  const [isCongratulationOpen, setCongratulationsOpen] = useState(false);
  const [isAnswerIncorrectOpen, setAnswerIncorrectOpen] = useState(false);
  const [isGameRulesDialogOpen, setGameRulesDialogOpen] = useState(true);
  const [isExplanationDialogOpen, setExplanationDialogOpen] = useState(false);
  const [getAnswerByLesson, editAnswerByLesson]: [
    (lessonTitle: string) => string,
    (update: EditarRespostasAction) => void
  ] = useAtom(editarRespostaPreTesteAtom);

  let render: JSX.Element | null = null;

  switch (paginaAtual) {
    case "INTRO":
      render = (
        <>
          <Container sx={{ overflowY: "auto", padding: 3 }}>
            <PageTitle>
              Geração <br /> Methiolate
            </PageTitle>
            <Grid container direction="column" alignItems="center">
              <Image
                src="joelho-ralado-COPYRIGHT.jpg"
                width="90%"
                height="auto"
                // @ts-ignore
                sx={{ p: 2, maxWidth: "600px" }}
              ></Image>
              <Paragraph fontStyle={"italic"}>
                Todo mundo já ralou o joelho alguma vez na vida, não é?
              </Paragraph>
            </Grid>
            <Paragraph>
              Seja caindo da bicicleta, seja cortando-se enquanto cozinha... o
              fato é: machucar-se é um acontecimento comum na vida de todo
              mundo. Tão comum que é bem possível que você nunca tenha dado
              muita bola quando acontece, não é? "É só pegar um curativo e vida
              que segue..."
            </Paragraph>
            <Paragraph>
              No entanto, se você parar por um segundo para se aprofundar, você
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
              sempre com uma proposta mais lúdica. As possibilidades vão desde
              uma partida de TERMO com algum jargão mencionado no vídeo até um
              jogo da memória de imagens e definições sobre o tópico. Isso você
              poderá descobrir com o progredir das lições
            </Paragraph>
            <Paragraph>No mais, é isto! Bons estudos e divirta-se!</Paragraph>
            <NextTabButton
              onClick={() => {
                editarProgresso({
                  lessonTitle: "joao-e-as-etapas-da-hemostasia",
                  state: "INTRO_LIDA",
                });
                setPaginaAtual("PRE");
              }}
            />
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
                  lessonTitle: "joao-e-as-etapas-da-hemostasia",
                  state: "PRETESTE_RESPONDIDO",
                });
                setPaginaAtual("VIDEO");
                setExplanationDialogOpen(true);
              }}
            />
          }
        />
      );
      break;
    case "VIDEO":
      render = (
        <>
          <Dialog
            open={isExplanationDialogOpen}
            onClose={() => setExplanationDialogOpen(false)}
          >
            <DialogContent>
              <DialogContentText>
                Sua resposta não será checada imediatamente. Você terá a chance
                de mudá-la após assistir ao vídeo da próxima sessão.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setExplanationDialogOpen(false)}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <div style={{ padding: "5vw" }}>
            <PageTitle>As crônicas de Joãozinho</PageTitle>
            <Paragraph>
              Chegou a hora de você conhecer nosso protagonista!
            </Paragraph>
            <Paragraph>
              Joãozinho é um menino travesso que será o cobaia perfeito para a
              nossa aventura. Ele tem uma certa propensão a não olhar para onde
              anda, então é bem provável que ele ostente um machucão ou outro
              que a gente possa acompanhar para o nosso projeto.
            </Paragraph>
            <Paragraph>
              Dê uma espiadinha aqui no vídeo que preparamos para você e
              aproveite para tentar encontrar a resposta para o quiz anterior.
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
                  Com os conhecimentos que você acabou de obter, deseja alterar
                  sua resposta?
                </div>
                <Alert variant="outlined" color="info" sx={{ margin: 2 }}>
                  <strong>Enunciado:</strong>{" "}
                  {preTesteContents["joao-e-as-etapas-da-hemostasia"].pergunta}
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
                      preTesteContents["joao-e-as-etapas-da-hemostasia"]
                        .respostaCorreta
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

                    setPaginaAtual("PRE");
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
                setPaginaAtual("POS");
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
                setPaginaAtual("POS");
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
      break;
    case "POS":
      render = (
        <div
          style={{ textAlign: "center", position: "relative", top: "-106px" }}
        >
          <DefaultDialog
            open={isGameRulesDialogOpen}
            onClose={() => setGameRulesDialogOpen(false)}
            title={"Instruções"}
            backgroundDarkColor={blue["700"]}
            content={
              <List>
                <ListItem>
                  Agora a gente vai jogar uma partidinha de TERMO (também
                  conhecido como WORDLE). As regras são simples:
                </ListItem>
                <ListItem>
                  - Há uma palavra secreta de 7 letras que você deverá acertar
                  em, no máximo, 6 chutes (usando o teclado disponível na
                  própria página).
                </ListItem>
                <ListItem>
                  - Após cada chute, o display mostrará algumas letras da
                  palavra inserida com uma coloração amarela e outras com
                  coloração verde.
                </ListItem>
                <ListItem>
                  - A coloração amarela indica que aquela letra ESTÁ PRESENTE na
                  palavra secreta, mas NÃO NAQUELA POSIÇÃO
                </ListItem>
                <ListItem>
                  - Já a coloração verde indica que você ACERTOU a letra
                  presente naquela posição da palavra secreta.
                </ListItem>
                <ListItem>Boa sorte! 😊</ListItem>
              </List>
            }
          />
          <iframe
            src="https://mywordle.strivemath.com/?word=bwsutrw&lang=any"
            style={{
              width: "87%",
              height: "700px",
              borderWidth: 0,
              maxWidth: "320px",
            }}
          />
          <br />
          <DefaultButton onClick={() => setGameRulesDialogOpen(true)}>
            Rever instruções
          </DefaultButton>
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
      <DefaultBottomNavBar
        currentTab={DEFAULT_PAGES.indexOf(paginaAtual)}
        setCurrentTab={(n: number) => setPaginaAtual(DEFAULT_PAGES[n])}
        progresso={progresso}
      />
    </>
  );
}

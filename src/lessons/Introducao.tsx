import React from "react";
import { useState } from "react";
import PreTeste from "../components/PreTeste";
import preTesteContents from "../contents.json";
import { BottomNavigation, Container, Grid, Typography } from "@mui/material";
import MultipleChoiceQuiz from "../components/MultipleChoiceQuiz";
import BottomNavBar from "../components/BottomNavBar";
import { DEFAULT_PAGES, iframeStylesForScale } from "../constants";
import DefaultPage from "../@types/DefaultPage";
import Image from "mui-image";
import Paragraph from "../components/Paragraph";
import ProgressoEnum, { ProgressoEnumDefault } from "../@types/ProgressoEnum";
import {
  Lightbulb,
  Lock,
  PsychologyAlt,
  SmartDisplay,
  TipsAndUpdates,
  Title,
} from "@mui/icons-material";
import {
  EditarProgressoLicaoAction,
  editarProgressoLicaoAtom,
} from "../atoms/progressoLicaoAtom";
import { useAtom } from "jotai";
import PageTitle from "../components/PageTitle";
import AutoResizableIFrame from "../components/AutoResizableIFrame";

const LESSON_NAME = "introducao";
export default function Introducao() {
  const [progresso, editarProgresso]: [
    ProgressoEnum,
    (update: EditarProgressoLicaoAction) => void
  ] = useAtom(editarProgressoLicaoAtom);
  const [paginaAtual, setPaginaAtual] = useState<DefaultPage>(DEFAULT_PAGES[0]);

  let _element: JSX.Element | null = null;

  switch (paginaAtual) {
    case "INTRO":
      _element = (
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
      _element = (
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
      _element = (
        <>
          <PageTitle>As crônicas de Joãozinho</PageTitle>
          <AutoResizableIFrame>
            {/* Proporção: width="560" height="315" (7:9)*/}

            <iframe
              src="https://www.youtube.com/embed/IGmYTjpWSa4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              // @ts-ignore
              style={iframeStylesForScale}
            ></iframe>
          </AutoResizableIFrame>
        </>
      );
  }

  console.log(progresso);

  return (
    <>
      <Container
        sx={{
          height: "80vh",
          overflowY: "auto",
          p: 0,
        }}
      >
        {_element}
      </Container>
      <BottomNavigation />
      <BottomNavBar
        // DefaultPages mapeia "PRE", "AULA", "POS" para 0, 1 e 2 (pois BottomNavBar usa índices para gerenciar as abas)
        currentTab={DEFAULT_PAGES.indexOf(paginaAtual)}
        setPaginaAtual={(n: number) => setPaginaAtual(DEFAULT_PAGES[n])}
        items={[
          { label: "Intro", icon: <PsychologyAlt />, isLocked: false },
          {
            label: "Pré-teste",
            icon:
              progresso == "PRETESTE_NAO_RESPONDIDO" ||
              progresso == undefined ? (
                <Lightbulb />
              ) : (
                <Lock />
              ),
            isLocked: progresso == "PRETESTE_RESPONDIDO" ? true : false,
          },
          { label: "Vídeo", icon: <SmartDisplay />, isLocked: false },
          { label: "Pós-teste", icon: <TipsAndUpdates />, isLocked: false },
        ]}
      />
    </>
  );
}

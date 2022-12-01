import React from "react";
import { Container, Grid } from "@mui/material";
import DefaultTab from "../../@types/DefaultPage";
import Image from "mui-image";
import Paragraph from "../../components/Paragraph";
import PageTitle from "../../components/PageTitle";
import NextTabButton from "../../components/NextTabButton";
import { lessonStateAtom } from "../../atoms/lessonStateAtom";
import { useSetAtom } from "jotai";

export default ({
  setCurrentTab: setPaginaAtual,
}: {
  setCurrentTab: (nextTab: DefaultTab) => void;
}): JSX.Element | null => {
  const setLessonState = useSetAtom(lessonStateAtom);

  return (
    <>
      <Container sx={{ overflowY: "auto", padding: 3 }}>
        <PageTitle>
          Geração <br /> Methiolate
        </PageTitle>
        <Grid container direction="column" alignItems="center">
          <Image
            src="joelho-ralado-COPYRIGHT.jpg"
            width="100%"
            height="auto"
            // @ts-ignore
            sx={{ p: 2, maxWidth: "300px" }}
          ></Image>
          <Paragraph fontStyle={"italic"} variant="body2">
            Todo mundo já ralou o joelho alguma vez na vida, não é?
          </Paragraph>
        </Grid>
        <Content />
        <NextTabButton
          onClick={() => {
            setLessonState("INTRO_LIDA");
            setPaginaAtual("PRE");
          }}
        />
      </Container>
    </>
  );
};

const Content = ({}) => {
  return (
    <>
      <Paragraph>
        Seja caindo da bicicleta, seja cortando-se enquanto cozinha... o fato é:
        machucar-se é um acontecimento comum na vida de todo mundo. Tão comum
        que é bem possível que você nunca tenha dado muita bola quando acontece,
        não é? "É só pegar um curativo e vida que segue..."
      </Paragraph>
      <Paragraph>
        No entanto, se você parar por um segundo para se aprofundar, você logo
        descobrirá toda a complexidade que esse fenômeno tem para oferecer.
      </Paragraph>
      <Paragraph>
        Desde a resposta inicial rápida dos vários tipos celulares do organismo
        até a resolução definitiva do coágulo, a fisiologia das lesões
        superficiais é um mundo à parte. Por isso, eu te convido a uma pequena
        jornada por esse universo sob as lentes das diversas ciências
        biológicas.
      </Paragraph>
      <Paragraph>
        A proposta é simples: cada lição contará com uma introdução inicial
        (como esta) seguida de um "pré-teste". Essa avaliação pode assumir as
        mais diversas formas, seja um quiz, uma charada ou mesmo um pequeno
        videogame.
      </Paragraph>
      <Paragraph>
        Porém, não será o <i>app</i> que irá checar a resposta...{" "}
        <strong>será você mesmo</strong>. Em outras palavras, com o conhecimento
        que adquirir assistindo ao vídeo da lição, a plataforma lhe dará a
        oportunidade de revisar sua resposta antes de ir para a avaliação final.
        Dessa forma, você terá a chance de ver o quanto você aprendeu e também
        de consumir a aula de uma maneira mais ativa, caçando pontos-chave que
        ajudem a responder a questão.
      </Paragraph>
      <Paragraph>
        Por fim, no final de cada lição, haverá outro teste, porém quase sempre
        com uma proposta mais lúdica. As possibilidades vão desde uma partida de
        TERMO com algum jargão mencionado no vídeo até um jogo da memória de
        imagens e definições sobre o tópico. Isso você poderá descobrir com o
        progredir das lições
      </Paragraph>
      <Paragraph>No mais, é isto! Bons estudos e divirta-se!</Paragraph>
    </>
  );
};

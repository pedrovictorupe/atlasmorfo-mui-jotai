import React from "react";
import { Container, Grid } from "@mui/material";
import DefaultTab from "../../@types/DefaultTab";
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
        machucar-se parece algo banal. "É só colar um Band-Aid e vida que
        segue..."
      </Paragraph>
      <Paragraph>
        No entanto, se há algo que a biologia pode nos ensinar é que a resposta
        do organismo ao ferimento está longe de ser algo corriqueiro.
      </Paragraph>
      <Paragraph>
        Desde a resposta inicial dos vários tipos celulares até a resolução
        definitiva do coágulo, a fisiologia das lesões superficiais é um mundo à
        parte. Por isso, a gente te convida a aprender um pouco mais sobre esse
        tópico de uma maneira lúdica e interativa.
      </Paragraph>
      <Paragraph>
        A proposta é simples: cada lição contará com uma introdução inicial
        (como esta) seguida de um "pré-teste". Essa avaliação pode assumir as
        mais diversas formas, seja um quiz, uma charada ou mesmo um pequeno
        videogame.
      </Paragraph>
      <Paragraph>
        Porém, há um detalhe: será <i>você</i>, e não o app, quem corrigirá essa
        atividade. Funciona da seguinte forma: depois de responder ao pré-teste,
        você terá acesso a uma videoaula sobre o tema; com o conhecimento que
        você adquirir nessa etapa, a plataforma lhe dará a oportunidade de
        revisar sua resposta antes de ir para a avaliação final. Dessa forma,
        você terá a chance de ver o quanto você aprendeu e também de consumir a
        aula de uma maneira mais ativa, caçando pontos-chave que ajudem a
        responder a questão.
      </Paragraph>
      <Paragraph>
        Por fim, no final de cada lição, haverá outro teste, porém quase sempre
        com uma proposta mais lúdica e relacionado a pontos mais específicos do
        vídeo.
      </Paragraph>
      <Paragraph>É isto! Bons estudos e divirta-se!</Paragraph>
    </>
  );
};

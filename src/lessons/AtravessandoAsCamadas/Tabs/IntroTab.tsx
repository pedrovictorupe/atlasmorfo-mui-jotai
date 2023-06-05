import React from "react";
import { Button, Container, Grid, List, ListItem } from "@mui/material";
import DefaultTab from "../../../@types/DefaultTab";
import Image from "mui-image";
import Paragraph from "../../../components/Paragraph";
import PageTitle from "../../../components/PageTitle";
import NextTabButton from "../../../components/NextTabButton";
import { lessonStateAtom } from "../../../atoms/lessonStateAtom";
import { SetStateAction, useAtom, useSetAtom } from "jotai";
import gameRulesAtom from "../../../atoms/gameRulesAtom";
import { blue } from "@mui/material/colors";
import DefaultDarkDialog from "../../../components/DefaultDarkDialog";
import informativeBoxAtom from "../../../atoms/informativeBoxAtom";
import { contents, InformativeBoxWord } from "../../../boxes";

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
          Um pouco de
          <br /> histologia
        </PageTitle>
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
  const [informativeBoxWord, setInformativeBoxWord] =
    useAtom(informativeBoxAtom);

  return (
    <>
      <Paragraph>
        O corpo humano apresenta diversos tecidos e camadas que se originam dos
        três tecidos primários do embrião:{" "}
        <div
          style={{ display: "inline-block", color: "mediumblue" }}
          onClick={() => setInformativeBoxWord("Ectoderma")}
        >
          ectoderma
        </div>
        , mesoderma e endoderma. Cada um desses tecidos desempenha um papel na
        formação de diferentes tecidos do corpo.
      </Paragraph>
      <Paragraph>
        Por exemplo, o endoderma forma o revestimento interno da maioria dos
        órgãos, enquanto o ectoderma forma os tecidos de revestimento externo,
        como pele, pelos e unhas, além de estar envolvido na formação do tecido
        nervoso. O mesoderma, por sua vez, contribui para a formação de tecidos
        de preenchimento, como músculos, tecido conjuntivo e tecido esquelético.
        Quando ocorre uma lesão, a extensão e a profundidade do dano podem
        afetar diferentes camadas de tecido, exigindo um processo de
        cicatrização mais complexo.
      </Paragraph>
      <Paragraph>
        A pele, por exemplo, é composta por três principais camadas: epiderme,
        derme e hipoderme. A epiderme é avascular e composta por várias camadas
        de células, enquanto a derme é uma camada intermediária de tecido
        conjuntivo que contém vasos sanguíneos. A hipoderme é uma camada
        subcutânea que armazena células adiposas e desempenha funções de
        isolamento térmico e armazenamento de energia.
      </Paragraph>
      <Paragraph>
        Quando há lesão nos vasos sanguíneos, ocorre sangramento e o processo de
        cicatrização envolve a migração de células de defesa, proliferação de
        capilares, deposição de colágeno e regeneração das células epiteliais. A
        cicatrização completa pode levar cerca de seis meses, mas após um mês a
        ferida geralmente já está fechada com tecido epitelial íntegro.
      </Paragraph>
      <InformativeBox
        informativeBoxWord={informativeBoxWord}
        setInformativeBoxOpen={setInformativeBoxWord}
      />
    </>
  );
};

const InformativeBox = ({
  informativeBoxWord: informativeBoxWord,
  setInformativeBoxOpen: setInformativeBoxWord,
}: InformativeBoxProps) => {
  return (
    <DefaultDarkDialog
      open={informativeBoxWord != "Fechado"}
      onClose={() => setInformativeBoxWord("Fechado")}
      title={"Ectoderma"}
      backgroundDarkColor={blue["700"]}
      content={
        <List>
          {contents[informativeBoxWord].map((paragraph: string) => (
            <ListItem key={paragraph.slice(0, 5)}>{paragraph}</ListItem>
          ))}
        </List>
      }
      actions={
        <Button
          onClick={() => setInformativeBoxWord("Fechado")}
          sx={{ color: "#fff" }}
        >
          Ok
        </Button>
      }
    />
  );
};

type InformativeBoxProps = {
  informativeBoxWord: InformativeBoxWord;
  setInformativeBoxOpen: (update: SetStateAction<InformativeBoxWord>) => void;
};

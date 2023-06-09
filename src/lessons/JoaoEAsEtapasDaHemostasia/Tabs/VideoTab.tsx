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
import Hiperlink from "../../../components/Hiperlink";
import DefinitionModal from "../../../components/DefinitionModal";
import BoxAnchor from "../../../components/BoxAnchor";
import GenericBox from "../../../components/GenericBox";

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
        <YoutubeVideo src="https://www.youtube.com/embed/G2RmUBIBNqs" />
        <Paragraph>
          A hemostasia é o mecanismo pelo qual o organismo interrompe um
          sangramento. Esse processo ocorre quando há uma lesão nas paredes de
          um vaso sanguíneo e consiste no selamento dessas lesões por meio da
          formação de um tampão composto por fibrina e plaquetas.
        </Paragraph>
        <Paragraph>
          A hemostasia é desencadeada por uma série complexa de fenômenos
          biológicos que ocorrem imediatamente como resposta à lesão do vaso
          sanguíneo. O objetivo desse processo é solucionar a hemorragia e
          evitar a perda excessiva de sangue.
        </Paragraph>
        <Paragraph>As etapas do processo de hemostasia incluem:</Paragraph>
        <Paragraph>
          • Vasoconstrição: Quando ocorre uma lesão no vaso sanguíneo, os{" "}
          <Hiperlink word="Músculos lisos">músculos lisos</Hiperlink> da parede
          do vaso se contraem, causando a vasoconstrição. Isso reduz o fluxo
          sanguíneo na região afetada e diminui o sangramento.
        </Paragraph>
        <Paragraph>
          • Hemostasia primária: As{" "}
          <Hiperlink word="Plaquetas">plaquetas sanguíneas</Hiperlink> são
          ativadas e aderem ao local da lesão, formando uma espécie de tampão
          temporário. Essa aderência é facilitada pela exposição de componentes
          do tecido conjuntivo vascular e pela liberação de substâncias
          químicas, como a{" "}
          <Hiperlink word="Tromboxano A2"> tromboxano A2</Hiperlink>. Essa fase
          é essencial para a formação do tampão plaquetário.
        </Paragraph>
        <Paragraph>
          • Hemostasia secundária: Após a aderência das plaquetas, ocorre a
          ativação do sistema de coagulação. Uma cascata de reações bioquímicas
          é desencadeada, resultando na formação de fibrina, uma proteína
          insolúvel que se entrelaça com as plaquetas, formando um coágulo
          estável. Ao final da cascata de coagulação ocorre a formação do
          coágulo de fibrina, a partir do fibrinogênio que é ativado pela
          trombina. O coágulo formado reforça o tampão plaquetário e contribui
          para a interrupção eficaz do sangramento.
        </Paragraph>
        <Paragraph>
          Após a hemostasia, ocorre o processo de reparação tecidual, no qual as
          células do vaso sanguíneo danificado se regeneram e a fibrina é
          gradualmente removida através do processo de{" "}
          <Hiperlink word="Fibrinólise">fibrinólise</Hiperlink>
        </Paragraph>

        <Paragraph>
          No vídeo em questão, o processo de hemostasia, que ocorre quando há um
          sangramento devido à lesão vascular, é vivenciado por João.
        </Paragraph>
        <Paragraph>
          Os diferentes tipos de vasos sanguíneos têm diferentes características
          histológicas e, portanto, a extensão e o tratamento da lesão variam.
        </Paragraph>
        <Paragraph>
          As <Hiperlink word="Artérias">artérias</Hiperlink> possuem uma camada
          de tecido endotelial revestida por uma rede elástica e{" "}
          <Hiperlink word="Tecido muscular">tecido muscular</Hiperlink>,
          enquanto as <Hiperlink word="Veias">veias</Hiperlink> possuem{" "}
          <Hiperlink word="Válvulas semilunares">
            válvulas semilunares
          </Hiperlink>{" "}
          e tecido muscular contrátil. Os{" "}
          <Hiperlink word="Capilares">capilares</Hiperlink> são os vasos mais
          pequenos e têm{" "}
          <Hiperlink word="Células endoteliais">células endoteliais</Hiperlink>{" "}
          apoiadas por{" "}
          <Hiperlink word="Tecido conjuntivo">tecido conjuntivo</Hiperlink> rico
          em <Hiperlink word="Colágeno">colágeno</Hiperlink>.
        </Paragraph>
        <Paragraph>
          Quando ocorre uma lesão, a exposição do fator tecidual e do colágeno
          ativam o processo de coagulação. Inicialmente, após o dano vascular,
          ocorre a liberação da molécula{" "}
          <Hiperlink word="Endotelina">endotelina</Hiperlink>, que causa
          vasoconstrição no tecido danificado. Em seguida, ocorre a hemostasia
          primária, na qual um aglomerado de plaquetas se forma no local da
          lesão, formando um tampão que ajuda no processo de cicatrização.
        </Paragraph>
        <Paragraph>
          Durante a hemostasia primária, ocorrem várias etapas, como a aderência
          das plaquetas ao colágeno exposto e a liberação de grânulos contendo
          substâncias como <Hiperlink word="ADP">ADP</Hiperlink> e{" "}
          <Hiperlink word="Tromboxano A2">TxA2</Hiperlink>, que promovem
          vasoconstrição e atração de mais plaquetas. Esse agregado de plaquetas
          é um tampão temporário que é posteriormente estabilizado pela formação
          de fibrina, uma molécula proteica fibrosa.
        </Paragraph>
        <Paragraph>
          A hemostasia secundária é a ativação da cascata de coagulação para a
          formação final de fibrina. Existem duas vias, a via intrínseca e a via
          extrínseca, que se encontram durante o processo. Na via intrínseca, o{" "}
          <Hiperlink word="Fator XII">fator XII</Hiperlink> é exposto ao
          colágeno, levando à ativação de vários fatores que culminam na
          formação de trombina, responsável pela conversão da protrombina em
          fibrina. Na via extrínseca, o dano tecidual libera o{" "}
          <Hiperlink word="Fator tecidual">fator tecidual</Hiperlink>, que ativa
          a cascata de coagulação, levando também à formação da fibrina
        </Paragraph>
        <Paragraph>
          Após a formação do coágulo, ocorre a hemostasia terciária, também
          conhecida como fibrinólise. Nessa etapa, ocorre a destruição
          progressiva coágulo formado através da ação de agentes fibrinolíticos.
          O ativador tecidual do plasminogênio é liberado, convertendo o
          plasminogênio em plasmina, que degrada a rede de fibrina. Os produtos
          de degradação da fibrina são fagocitados por células como{" "}
          <Hiperlink word="Macrófagos">macrófagos</Hiperlink> e{" "}
          <Hiperlink word="Eosinófilos">eosinófilos</Hiperlink>, restabelecendo
          o fluxo sanguíneo normal.
        </Paragraph>
        <Paragraph>
          É importante destacar, por fim, que a hemostasia é um processo
          contínuo e regulado por vários fatores coagulantes e anticoagulantes
          no corpo. No final, o sangramento é interrompido, e a lesão vascular é
          reparada.
        </Paragraph>
        <BoxAnchor title="Trombofilias" box={<BoxTrombofilia />}>
          As trombofilias são um grupo de doenças na qual existe uma maior
          propensão à formação de coágulos sanguíneos no corpo. Clique aqui para
          explorar as diferentes causas dessa condição!
        </BoxAnchor>
        <DefinitionModal />
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

const BoxTrombofilia = () => (
  <GenericBox title="Trombofilias" anchorText="Saber mais">
    <Paragraph>
      A trombofilia se refere a uma condição na qual existe uma maior propensão
      à formação de coágulos sanguíneos no corpo. Essa inclinação pode ser
      resultado de modificações genéticas herdadas ou adquiridas ao longo da
      vida, que afetam o processo de coagulação ou dissolução dos coágulos.
      Essas alterações proporcionam um ambiente favorável para a formação de
      coágulos no sangue, o que pode acarretar em complicações sérias, como a
      trombose. É crucial ter conhecimento dessa condição e buscar um tratamento
      adequado para diminuir o risco de ocorrência de eventos trombóticos.
    </Paragraph>
    <Paragraph>
      A trombofilia é de origem hereditária quando é notado a presença de uma
      anormalidade hereditária que predispõe à oclusão vascular, no entanto, é
      necessário que haja interação com outro componente, seja ele hereditário
      ou adquirido, para que o evento trombótico ocorra. As trombofilias
      hereditárias são geralmente causadas por mudanças nos inibidores naturais
      da coagulação (antitrombina, proteína C, proteína S e resistência à
      proteína C ativada) ou por mutações em fatores de coagulação específicos
      (como FV G1691A, conhecido como Fator V Leiden, e mutação G20210A da
      protrombina). As trombofilias hereditárias costumam se manifestar
      clinicamente como tromboembolismos venosos e possuem características
      específicas, incluindo a ocorrência em pessoas jovens, recorrência
      frequente, histórico familiar de eventos trombóticos, trombose em locais
      atípicos e a gravidade desproporcional dos episódios trombóticos em
      relação ao fator desencadeante.
    </Paragraph>
    <Paragraph>
      Em alguns casos, a trombofilia pode ser adquirida, como em neoplasias,
      síndrome antifosfolípide, imobilização, uso de medicamentos, como terapia
      de reposição hormonal, anticoncepcionais orais e heparina. A trombofilia
      adquirida pode se apresentar clinicamente de várias maneiras, como a
      trombose venosa profunda, embolia pulmonar, tromboflebite superficial e
      trombose arterial. Além disso, complicações durante a gravidez também
      podem ocorrer, aumentando o risco de pré-eclâmpsia, restrição de
      crescimento fetal, aborto espontâneo recorrente e complicações na
      placenta. Os sintomas e complicações podem variar de acordo com o tipo
      específico de trombofilia adquirida e é de fundamental importância buscar
      orientação médica para um diagnóstico preciso e tratamento adequado.
    </Paragraph>
    <Paragraph>
      Pacientes trombofílicos tendem a apresentar uma maior probabilidade a
      desenvolver episódios de tromboembolismo venoso. O tromboembolismo venoso
      ocorre quando há a formação de um coágulo sanguíneo dentro de um vaso que
      transporta sangue venoso. Esse coágulo pode permanecer no local onde se
      formou ou se deslocar para outras áreas do sistema vascular. Essa condição
      pode se manifestar como trombose venosa profunda ou tromboembolismo
      pulmonar, com a presença de coágulos nas veias profundas das extremidades
      inferiores e na circulação arterial dos pulmões.
    </Paragraph>
  </GenericBox>
);

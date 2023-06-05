import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DefaultTab from "../../../@types/DefaultTab";
import Paragraph from "../../../components/Paragraph";
import PageTitle from "../../../components/PageTitle";
import NextTabButton from "../../../components/NextTabButton";
import { lessonStateAtom } from "../../../atoms/lessonStateAtom";
import { useSetAtom } from "jotai";
import Hiperlink from "../../../components/Hiperlink";
import DefinitionModal from "../../../components/DefinitionModal";
import currentLessonAtom from "../../../atoms/currentLessonAtom";

import GenericBox from "../../../components/GenericBox";

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
  const setCurrentLesson = useSetAtom(currentLessonAtom);

  return (
    <>
      <Paragraph>
        O corpo humano apresenta diversos tecidos e camadas que se originam dos
        três tecidos primários do embrião:{" "}
        <Hiperlink word="Ectoderma">ectoderma</Hiperlink>,{" "}
        <Hiperlink word="Mesoderma">mesoderma</Hiperlink> e{" "}
        <Hiperlink word="Endoderma">endoderma</Hiperlink>. Cada um desses
        tecidos desempenha um papel na formação de diferentes tecidos do corpo.
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
        A pele, por exemplo, é composta por três principais camadas:{" "}
        <Hiperlink word="Epiderme">epiderme</Hiperlink>,{" "} 
        <Hiperlink word="Derme">derme</Hiperlink> e{" "}
        <Hiperlink word="Hipoderme">hipoderme</Hiperlink>. A epiderme é
        avascular e composta por várias camadas de células, enquanto a derme é
        uma camada intermediária de{" "}
        <Hiperlink word="Tecido conjuntivo ">tecido conjuntivo</Hiperlink> que
        contém vasos sanguíneos. A hipoderme é uma camada subcutânea que
        armazena <Hiperlink word="Células adiposas">células adiposas</Hiperlink>{" "}
        e desempenha funções de isolamento térmico e armazenamento de energia.
        <BoxAnchor title="Ehler Danlos" box={<BoxEhlerDanlos />}>
          Ehlers Danlos é uma doença de ordem genética rara que acomete o tecido
          conjuntivo. Clique aqui para aprender sobre como ela funciona
        </BoxAnchor>
      </Paragraph>
      <Paragraph>
        Quando há lesão nos vasos sanguíneos, ocorre sangramento e o processo de
        cicatrização envolve a migração de células de defesa, proliferação de
        capilares, deposição de <Hiperlink word="Colágeno ">colágeno</Hiperlink>{" "}
        e regeneração das{" "}
        <Hiperlink word="Células epiteliais">células epiteliais</Hiperlink>. A
        cicatrização completa pode levar cerca de seis meses, mas após um mês a
        ferida geralmente já está fechada com tecido epitelial íntegro.
        <BoxAnchor title="Colágeno" box={<BoxColageno />}>
          O colágeno é um tipo de proteína estrutural que pode ser encontrado em
          grandes quantidades no tecido conjuntivo. Clique aqui para saber mais
          sobre suas peculiaridades
        </BoxAnchor>
      </Paragraph>
      <DefinitionModal />
    </>
  );
};

const BoxAnchor = ({
  title,
  box,
  children,
}: {
  title: string;
  box: JSX.Element;
  children: string;
}) => {
  return (
    <Box sx={{ minWidth: 275, my: 2 }}>
      <Card variant="outlined">
        {" "}
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography color="text.secondary">{children}</Typography>
        </CardContent>
        <CardActions>{box}</CardActions>
      </Card>
    </Box>
  );
};

const BoxColageno = () => (
  <GenericBox title="O colágeno">
    <Paragraph>
      O colágeno é um tipo de proteína estrutural que pode ser encontrado em
      grandes quantidades no tecido conjuntivo, sintetizada pelos fibroblastos,
      sendo o principal constituinte da matriz extracelular de tendões, ossos,
      cartilagens, pele, e pode ser encontrado nos músculos e na camada da
      córnea dos olhos, por exemplo. É uma proteína de origem animal, que
      desempenha funções importantes para o corpo, como a manutenção da
      integridade estrutural do tecido e ainda confere resistência mecânica e
      elasticidade.
    </Paragraph>
    <Paragraph>
      Essa proteína estrutural é formada por uma unidade monomérica conhecida
      como tropocolágeno, o qual é formado por três cadeias polipeptídicas alfa,
      que se apresentam na forma helicoidal, ligadas umas às outras por meio de
      ligações de hidrogênio. A estabilidade da forma helicoidal é garantida por
      meio da hidroxilisina e da hidroxiprolina, as quais são formados por
      hidroxilação da prolina e lisina. Essa organização estrutural confere uma
      alta resistência a essa proteína.
    </Paragraph>
    <Paragraph>
      A formação do colágeno ocorre principalmente durante o processo de
      regeneração de tecidos e durante o desenvolvimento embrionário. Os
      fibroblastos secretam essa molécula na forma de pró-colágeno solúvel, o
      qual é secretado dentro das vesículas e, em seguida, é secretado para a
      matriz extracelular, onde as estruturas globulares ligadas ao pró-colágeno
      (uma contendo nitrogênio e a outra apresentando carbono terminais), são
      clivadas por C- e N-peptidases. Esse processo de clivagem forma o
      tropocolágeno, o qual vai formar as fibrilas colágenas Essas enzimas são
      essenciais para o início do processo de fibrogênese, uma vez que essas
      moléculas globulares ocupam um grande espaço em volta da molécula. As
      fibrilas de colágeno são compostas de agregados de moléculas de colágeno
      ao longo de um eixo paralelo. O conjunto de fibrilas forma as fibras de
      colágeno, que se organizam em feixes.
    </Paragraph>
    <Paragraph>
      O colágeno não é uma proteína única, mas uma família formada por
      aproximadamente 29 proteínas isoformas encontradas nos tecidos conjuntivos
      do corpo, as quais possuem características únicas e algumas possuem
      características inter-relacionadas. Dessas 29, nove são frequentemente
      disponíveis: colágenos os tipos I, II, III, IV, V, VII, IX, XI e XII, os
      quais podem ser divididos em tipos fibrilares e não fibrilares.
    </Paragraph>
    <Paragraph>
      Os colágenos tipos I, II, III, V, X, XXIV e XXVII alinham-se em grandes
      fibrilas extracelulares, sendo considerados como fibrilares. O colágeno do
      tipo IV é organizado em um entrelaçamento dentro das membranas basais, o
      do tipo VI forma microfibrilas distintas e o tipo VII forma fibrilas de
      ancoragem. Além disso, existem colágenos associados a fibrilas, que são
      dos tipos IX, XII, XIV, XIX, XX e XXI. Os tipos fibrilares I, II e III
      formam fibrilas de colágeno típicas e são os colágenos mais abundantes no
      corpo, podendo ser encontrados em pele, tendão, ossos, dentina,
      cartilagem, corpo vítreo, núcleo pulposo, pele, parede dos vasos, fibras
      reticulares.
    </Paragraph>
    <BoxAnchor
      title="Relação entre a vitamina C e o colágeno"
      box={<BoxVitaminaC />}
    >
      A vitamina C, ou ácido ascórbico, é essencial para a biossíntese do
      colágeno. Para se aprofundar nesse fenômeno, acesse este box
    </BoxAnchor>
  </GenericBox>
);

const BoxVitaminaC = () => (
  <GenericBox title="Relação entre a vitamina C e o colágeno">
    <Paragraph>
      A vitamina C é um tipo de vitamina hidrossolúvel e termolábil. Com exceção
      dos primatas de ordem superior (incluindo o ser humano),
      porquinhos-da-índia, algumas espécies de morcegos, peixes e pássaros,
      todas as espécies são capazes de produzir essa vitamina. Nas espécies
      incapazes de produzir essa vitamina, existe uma deficiência genética da
      enzima gulonolactona oxidase, a qual é responsável por catalisar a etapa
      final na biossíntese de ácido ascórbico, a partir da glicose. Dessa
      maneira, nas espécies supracitadas, é necessário que haja um suplemento
      adequado dessa vitamina na dieta. Além disso, por ser hidrossolúvel, essa
      vitamina é facilmente excretada pelos organismos, não sendo armazenada no
      corpo, por isso é importante que haja uma administração diária dessa
      vitamina, visto que suas reservas podem ser facilmente esgotadas.
    </Paragraph>
    <Paragraph>
      Essa vitamina pode ser encontrada na natureza sob duas formas: reduzida e
      oxidada. Essas duas formas são ativas igualmente, no entanto, a forma
      reduzida está mais difundida nas substâncias naturais. Além disso, podem
      ser de dois tipos, levógira (L) e dextrógira (D), no entanto, apenas a
      forma ácido L-ascórbico é ativa.
    </Paragraph>
    <Paragraph>
      A vitamina C é absorvida quase totalmente pela mucosa do intestino delgado
      por transporte ativo, ou seja, há gasto de energia. Após a sua absorção,
      essa vitamina passa para a corrente sanguínea, sendo levada para todos as
      partes do corpo humano
    </Paragraph>
    <Paragraph>
      O ácido ascórbico é importante para os seres humanos, uma vez que
      desempenha um importante papel nos processos celulares de oxirredução, uma
      vez que essa molécula é responsável por doar um elétron para um substrato,
      ou seja, atua como redutor ao mesmo tempo em que se oxida a um radical
      ascorbila, um radical livre que possui certa estabilidade. Duas moléculas
      de ascorbila podem sofrer dismutação (processo químico no qual uma parte
      das moléculas sofre processo de oxidação e a outra de redução) e formar 1
      molécula de ascorbato e 1 molécula de ácido dehidroascórbico, que são as
      formas totalmente reduzida e oxidada da vitamina C, respectivamente. A
      reação de transformação do ácido ascórbico em ácido dehidroascórbico é
      considerada como reversível, o que funciona como um sistema oxirredutor
      capaz de transportar hidrogênio nos processos de respiração, a nível
      celular.{" "}
    </Paragraph>
    <Paragraph>
      Além de seu potencial oxirredutor, esse ácido é importante para a síntese
      das catecolaminas, previne o escorbuto, é importante para na defesa do
      organismo contra infecções e é fundamental para a manter as paredes dos
      vasos sanguíneos íntegras.
    </Paragraph>
    <Paragraph>
      No entanto, qual a sua relação com a formação do colágeno?
    </Paragraph>
    <Paragraph>
      Essa vitamina é de extrema importância para o funcionamento das células do
      tecido conjuntivo responsável pela formação do colágeno, os fibroblastos.
      O ácido ascórbico funciona como um importante co-fator das enzimas prolil
      e lisil hidroxilase, que são essenciais para a biossíntese do colágeno,
      uma vez que catalisam a hidroxilação dos resíduos prolina e lisina nos
      polipeptídeos colágenos.{" "}
    </Paragraph>
    <Paragraph>
      Essa reação de hidroxilação é fundamental para que haja a formação e a
      estabilização do colágeno de tripla-hélice, e sua secreção no espaço
      extracelular, na forma de pró-colágeno, o qual é transformado
      subsequentemente em tropocolágeno, e, por fim, são formadas fibras
      colágenas por um rearranjo espacial espontâneo dos tropocolágenos.
    </Paragraph>
    <Paragraph>
      Esse ácido, atuando como co-fator das enzimas supracitadas, impede que
      haja a oxidação do ferro, o que iria causar a inativação desses
      catalisadores, promovendo, dessa maneira, a formação de uma rede colágena
      madura e normal por meio da manutenção da atividade enzimática. Além
      disso, essa molécula está envolvida na produção de colágeno do tipo I e
      III.
    </Paragraph>
    <Paragraph>
      Por fim, foi demonstrado que, até mesmo em indivíduos em idade avançada,
      por volta dos 80 anos, o ácido ascórbico é capaz de aumentar a síntese do
      colágeno em níveis semelhantes aos de células de recém-nascidos.
    </Paragraph>
    <Paragraph>
      Sendo assim, a falta dessa vitamina causa, sobretudo, o escorbuto, que se
      apresenta com hemorragia nas gengivas, visto que o colágeno é responsável
      por dar a integridade dessas estruturas.
    </Paragraph>
  </GenericBox>
);

const BoxEhlerDanlos = () => (
  <GenericBox title="Ehlers Danlos">
    <Paragraph>
      A síndrome de Ehlers Danlos é uma doença de ordem genética rara que
      acomete o tecido conjuntivo. Os pacientes portadores dessa síndrome
      apresentam uma hiperextensibilidade da pele, cicatrização anormal de
      feridas e hipermobilidade articular.{" "}
    </Paragraph>
    <Paragraph>
      Essa síndrome é um conjunto de seis subtipos, os quais apresentam sintomas
      característicos para cada subtipo:
    </Paragraph>
    <Paragraph>
      • Tipo 1 e Tipo 2: é a forma clássica da doença, sendo caracterizada pela
      hiperextensibilidade da pele, hematomas fáceis, friabilidade tecidual,
      hipermobilidade articular. É de herança autossômica dominante;
    </Paragraph>
    <Paragraph>
      • Tipo 3: também conhecido como hipermobilidade. Os pacientes apresentam
      hipermobilidade articular generalizada, luxação/dor articular recorrente,
      manifestações cutâneas leves. Herança autossômica dominante;
    </Paragraph>
    <Paragraph>
      • Tipo 4: conhecido como o tipo vascular da doença, sendo uma herança
      autossômica dominante, sendo caracterizado por dismorfismo facial, pele
      translúcida fina, má cicatrização de feridas, hematomas, ruptura vascular
      e perfuração intestinal;
    </Paragraph>
    <Paragraph>
      • Tipo 6: é chamado de cifoescoliótico, apresentando pele macia e
      aveludada, má cicatrização, frouxidão articular, luxações e cifose,
      fragilidade ocular, ruptura vascular, prolapso da válvula mitral. É e
      herança autossômica recessiva;
    </Paragraph>
    <Paragraph>
      • Tipo 7A-B: conhecido como o tipo artrocalásia, cujos pacientes
      apresentam hipermobilidade e luxações articulares generalizadas graves,
      lactentes flácidos, escoliose, características cutâneas leves. É um tipo
      de herança autossômica dominante;
    </Paragraph>
    <Paragraph>
      • Tipo 7C: chamado de dermatoparaxis. Os pacientes acometidos por esse
      tipo vão apresentar manifestações cutâneas graves, com fragilidade,
      hematomas, má cicatrização, ruptura visceral. É um tipo de herança
      autossômica dominante;
    </Paragraph>
    <Paragraph>
      O diagnóstico dessa síndrome é feito por meio de um exame clínico e a
      partir do histórico familiar. Para o diagnóstico clínico, é preciso seguir
      os critérios de Brighton, os quais podem ser divididos em principais e
      menores.
    </Paragraph>
    <TableContainer component={Paper} sx={{ m: 2 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              Critérios de Beighton para diagnóstico de Ehlers Danlos
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={0}>
            <TableCell component="th" scope="row">
              Critérios maiores
            </TableCell>
            <Stack>
              <TableCell component="th" scope="row">
                Pontuação de Beighton ≥4, agora ou no passado;
              </TableCell>
              <TableCell component="th" scope="row">
                Dor nas articulações em 4 ou mais articulações por 3 meses ou
                mais;
              </TableCell>
            </Stack>
          </TableRow>
          <TableRow key={1}>
            <TableCell component="th" scope="row">
              Critérios menores
            </TableCell>
            <Stack>
              <TableCell component="th" scope="row">
                Pontuação de Beighton 1-3 (ou 0-3 se tiver mais de 50 anos);
              </TableCell>
              <TableCell component="th" scope="row">
                Dor nas articulações por mais de 3 meses em uma a três
                articulações;
              </TableCell>
              <TableCell component="th" scope="row">
                Dor nas costas, espondilose ou espondilolistese por 3 meses ou
                mais;
              </TableCell>
              <TableCell component="th" scope="row">
                Deslocamento em mais de uma articulação ou a mesma articulação
                mais de uma vez;
              </TableCell>
              <TableCell component="th" scope="row">
                Apresentar 3 ou mais lesões em tecidos moles, como tenossinovite
                ou bursite;
              </TableCell>
              <TableCell component="th" scope="row">
                Pele anormal, como pele fina/elástica
              </TableCell>
              <TableCell component="th" scope="row">
                Sintomas oculares, como pálpebras caídas ou miopia
              </TableCell>
              <TableCell component="th" scope="row">
                Hábito marfanóide
              </TableCell>
              <TableCell component="th" scope="row">
                Varizes
              </TableCell>
              <TableCell component="th" scope="row">
                Hérnia
              </TableCell>
              <TableCell component="th" scope="row">
                Prolapso retal ou uterino
              </TableCell>
            </Stack>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Paragraph>
      A pontuação de Beighton é definida realizando os seguintes testes:
    </Paragraph>
    <Paragraph>
      • Aposição passiva do polegar na face flexora do antebraço (um ponto para
      cada mão);
    </Paragraph>
    <Paragraph>
      • Dorsiflexão passiva do quinto dedo {">"} 90º (um ponto para cada mão);
    </Paragraph>
    <Paragraph>
      • Hiperextensão do cotovelo {">"} 10º (um ponto para cada mão);
    </Paragraph>
    <Paragraph>
      • Hiperextensão dos joelhos {">"} 10º (um ponto para cada perna);
    </Paragraph>
    <Paragraph>
      • Flexão do tronco para a frente com os joelhos estendidos e as palmas das
      mãos apoiadas no chão;
    </Paragraph>
    <Paragraph>
      Dessa maneira, a síndrome de Ehlers Danlos pode ser diagnosticada caso o
      paciente apresente: dois critérios maiores, um critério maior e dois
      critérios menores, quatro critérios menores, dois critérios menores e um
      parente próximo, como um dos pais, diagnosticado com a síndrome da
      hipermobilidade articular.
    </Paragraph>
    <Paragraph>
      Essa síndrome pode levar a manifestações cutâneas (nas quais, ocorre uma
      hiperextensibilidade da pele, a qual se estende facilmente e recua após a
      liberação, se apresenta com um aspecto frágil. Além disso, as feridas
      levam mais tempo para cicatrizar), manifestações musculoesqueléticas
      (subluxação habitual e luxação das articulações, instabilidade articular,
      deformidades do pé, disfunção da articulação temporomandibular,
      osteoartrite), manifestações de fragilidade tecidual (hérnia repetitiva,
      como hérnia inguinal, umbilical). Além dessas manifestações, os pacientes
      acometidos podem apresentar contusões fáceis, excesso de pele nas
      pálpebras, algumas cicatrizes dilatadas na testa e no queixo, hipotonia
      muscular, que pode causar atraso no desenvolvimento motor. Além disso,
      podem ocorrer prolapso da valva mitral, ruptura espontânea de grandes
      artérias, juntamente com aneurismas intracranianos. Mulheres grávidas
      portadoras dessa síndrome podem apresentar parto prematuro, luxação dos
      quadris ou do ombro do recém-nascido.
    </Paragraph>
    <Paragraph>
      Não existe um tratamento para curar a Síndrome ou para corrigir as
      anomalias no tecido conjuntivo.
    </Paragraph>
    <Paragraph>
      Como essa Síndrome é herdada de modo autossômico dominante, é estimado que
      aproximadamente 50% dos indivíduos afetados tenham herdado o gene mutante
      de um pai afetado e cerca de 50% dos indivíduos afetados tenham uma
      mutação causadora da doença de novo. Se um dos pais for afetado, os seus
      filhos estarão em risco de adquirir a doença. Para isso, é necessário
      fazer um aconselhamento genético, que deve ser realizado antes da
      gravidez.
    </Paragraph>
  </GenericBox>
);

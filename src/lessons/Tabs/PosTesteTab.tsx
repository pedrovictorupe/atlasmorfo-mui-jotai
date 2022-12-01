import { Button, List, ListItem, TextField } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { useAtom, useSetAtom } from "jotai";
import React, { useEffect, useState } from "react";
import slugify from "slugify";
import gameRulesAtom from "../../atoms/gameRulesAtom";
import { lessonStateAtom } from "../../atoms/lessonStateAtom";
import DefaultButton from "../../components/DefaultButton";
import DefaultDarkDialog from "../../components/DefaultDarkDialog";

export default (): JSX.Element => {
  const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState(false);
  const setLessonState = useSetAtom(lessonStateAtom);
  const [isGameRulesOpen, setGameRulesOpen] = useAtom(gameRulesAtom);

  useEffect(() => setGameRulesOpen(true), []);

  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        top: "-106px",
      }}
    >
      <DefaultDarkDialog
        open={isGameRulesOpen}
        onClose={() => setGameRulesOpen(false)}
        title={"Agora é hora de TERMO!"}
        backgroundDarkColor={blue["700"]}
        content={
          <List>
            {paragraphs.map((paragraph) => (
              <ListItem key={paragraph.slice(0, 5)}>{paragraph}</ListItem>
            ))}
          </List>
        }
        actions={
          <Button
            onClick={() => setGameRulesOpen(false)}
            sx={{ color: "#fff" }}
          >
            Ok
          </Button>
        }
      />
      <iframe
        src="https://mywordle.strivemath.com/?word=bwsutrw&lang=any"
        scrolling="no"
        style={{
          height: "610px",
          borderWidth: 0,
          marginBottom: 0,
          overflowY: "hidden",
        }}
      />
      <br />
      <TextField
        label="Palavra secreta para prosseguir"
        onChange={(e: { target: { value: string } }) => {
          if (
            slugify(e.target.value, { lower: true, trim: true }) == "fibrina"
          ) {
            setHasAnsweredCorrectly(true);
            setLessonState("POS_TESTE_RESPONDIDO");
          }
        }}
        sx={{ m: 4, mt: 1 }}
      />
      <br />
      <DefaultButton onClick={() => setGameRulesOpen(true)}>
        Rever instruções
      </DefaultButton>
      <DefaultDarkDialog
        open={hasAnsweredCorrectly}
        onClose={() => setHasAnsweredCorrectly(false)}
        title={"Parabéns!"}
        content="Você concluiu a lição JOÃO E AS ETAPAS DA HEMOSTASIA. Aguarde por novas lições no futuro :)"
        backgroundDarkColor={green[700]}
      />
    </div>
  );
};

const paragraphs = [
  "Se você não conhece esse jogo, as regras são simples:",
  "- Há uma palavra secreta de 7 letras que você deverá acertar em, no máximo, 6 chutes (usando o teclado disponível na própria página).",
  "- Após cada chute, o display mostrará algumas letras da palavra inserida com uma coloração amarela e outras com coloração verde.",
  "- A coloração amarela indica que aquela letra ESTÁ PRESENTE na palavra secreta, mas NÃO NAQUELA POSIÇÃO",
  "- Já a coloração verde indica que você ACERTOU a letra presente naquela posição da palavra secreta.",
  "- FIQUE ATENTO: Se você acertar, você ainda precisará inserir a palavra descoberta no campo abaixo do jogo para prosseguir.",
  "PS: Você pode rever as regras a qualquer momento clicando no botão abaixo do teclado do jogo. Boa sorte!",
];

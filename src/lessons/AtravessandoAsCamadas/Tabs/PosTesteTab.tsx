import { Button, List, ListItem, TextField } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { useAtom, useSetAtom } from "jotai";
import React, { useEffect, useState } from "react";
import slugify from "slugify";
import gameRulesAtom from "../../../atoms/gameRulesAtom";
import { lessonStateAtom } from "../../../atoms/lessonStateAtom";
import DefaultButton from "../../../components/DefaultButton";
import DefaultDarkDialog from "../../../components/DefaultDarkDialog";

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
      <iframe
        src="https://mywordle.strivemath.com/?word=aqkroinar&lang=any"
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
            slugify(e.target.value, { lower: true, trim: true }) == "ectoderma"
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
        content="Você concluiu a lição ATRAVESSANDO AS CAMADAS. Aguarde por novas lições no futuro :)"
        backgroundDarkColor={green[700]}
      />
    </div>
  );
};

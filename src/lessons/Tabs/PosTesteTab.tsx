import { List, ListItem, TextField } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { useSetAtom } from "jotai";
import React, { useState } from "react";
import slugify from "slugify";
import LessonStateEnum from "../../@types/LessonStateEnum";
import { lessonStateAtom } from "../../atoms/lessonStateAtom";
import DefaultButton from "../../components/DefaultButton";
import DefaultDarkDialog from "../../components/DefaultDarkDialog";
import DefaultDialog from "../../components/DefaultDarkDialog";
import contents from "../../contents.json";

export default (props: {
  isGameRulesDialogOpen: boolean;
  setGameRulesDialogOpen: (arg: boolean) => void;
}): JSX.Element => {
  const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState(false);
  const setLessonState = useSetAtom(lessonStateAtom);

  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        top: "-106px",
      }}
    >
      <DefaultDialog
        open={props.isGameRulesDialogOpen}
        onClose={() => props.setGameRulesDialogOpen(false)}
        title={"Agora é hora de TERMO!"}
        backgroundDarkColor={blue["700"]}
        content={
          <List>
            {contents[
              "joao-e-as-etapas-da-hemostasia"
            ].abaPosTeste.dialogoExplicatorio.paragrafos.map((paragraph) => (
              <ListItem key={paragraph.slice(0, 5)}>{paragraph}</ListItem>
            ))}
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
        sx={{ m: 4 }}
      />
      <br />
      <DefaultButton onClick={() => props.setGameRulesDialogOpen(true)}>
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

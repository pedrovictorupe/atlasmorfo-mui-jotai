import { List, ListItem } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import DefaultButton from "../../components/DefaultButton";
import DefaultDialog from "../../components/DefaultDialog";

export default (props: {
  isGameRulesDialogOpen: boolean;
  setGameRulesDialogOpen: (arg: boolean) => void;
}): JSX.Element => (
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
      title={"Instruções"}
      backgroundDarkColor={blue["700"]}
      content={
        <List>
          <ListItem>
            Agora a gente vai jogar uma partidinha de TERMO (também conhecido
            como WORDLE). As regras são simples:
          </ListItem>
          <ListItem>
            - Há uma palavra secreta de 7 letras que você deverá acertar em, no
            máximo, 6 chutes (usando o teclado disponível na própria página).
          </ListItem>
          <ListItem>
            - Após cada chute, o display mostrará algumas letras da palavra
            inserida com uma coloração amarela e outras com coloração verde.
          </ListItem>
          <ListItem>
            - A coloração amarela indica que aquela letra ESTÁ PRESENTE na
            palavra secreta, mas NÃO NAQUELA POSIÇÃO
          </ListItem>
          <ListItem>
            - Já a coloração verde indica que você ACERTOU a letra presente
            naquela posição da palavra secreta.
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
    <DefaultButton onClick={() => props.setGameRulesDialogOpen(true)}>
      Rever instruções
    </DefaultButton>
  </div>
);

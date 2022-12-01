import { List, ListItem } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import DefaultButton from "../../components/DefaultButton";
import DefaultDialog from "../../components/DefaultDialog";
import contents from "../../contents.json";

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
          {contents[
            "joao-e-as-etapas-da-hemostasia"
          ].abaPosTeste.dialogoExplicatorio.paragrafos.map((paragraph) => (
            <ListItem>{paragraph}</ListItem>
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
    <DefaultButton onClick={() => props.setGameRulesDialogOpen(true)}>
      Rever instruções
    </DefaultButton>
  </div>
);

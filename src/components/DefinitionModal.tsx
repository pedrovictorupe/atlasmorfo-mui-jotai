import { useAtom } from "jotai";
import informativeBoxAtom from "../atoms/informativeBoxAtom";
import { contents } from "../definitionModals";
import { List, ListItem, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import DefaultDarkDialog from "./DefaultDarkDialog";

export default () => {
  const [informativeBoxWord, setInformativeBoxWord] =
    useAtom(informativeBoxAtom);

  return (
    <DefaultDarkDialog
      open={informativeBoxWord != "Fechado"}
      onClose={() => setInformativeBoxWord("Fechado")}
      title={informativeBoxWord}
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

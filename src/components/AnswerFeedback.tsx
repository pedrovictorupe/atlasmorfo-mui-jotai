import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useAtom } from "jotai";
import React from "react";
import ProgressoEnum from "../@types/ProgressoEnum";
import {
  EditarProgressoLicaoAction,
  editarProgressoLicaoAtom,
} from "../atoms/progressoLicaoAtom";

export default (props: {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
  backgroundDarkColor: string;
  lessonTitle: string;
}) => {
  const [progresso, editarProgresso]: [
    ProgressoEnum,
    (update: EditarProgressoLicaoAction) => void
  ] = useAtom(editarProgressoLicaoAtom);

  return (
    <Dialog
      open={props.open}
      onClose={() => {
        editarProgresso({
          lessonTitle: props.lessonTitle,
          state: "GABARITO_PRETESTE_VISUALIZADO",
        });
        props.onClose();
      }}
      PaperProps={{ style: { backgroundColor: props.backgroundDarkColor } }}
    >
      <DialogTitle variant="h4" color="#fff">
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText color="#fff">{props.content}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

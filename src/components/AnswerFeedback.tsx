import { useAtom } from "jotai";
import React from "react";
import ProgressoEnum from "../@types/ProgressoEnum";
import {
  EditarProgressoLicaoAction,
  editarProgressoLicaoAtom,
} from "../atoms/progressoLicaoAtom";
import DefaultDialog from "./DefaultDialog";

export default (props: {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element;
  backgroundDarkColor: string;
  lessonTitle: string;
}) => {
  const [, editarProgresso]: [
    ProgressoEnum,
    (update: EditarProgressoLicaoAction) => void
  ] = useAtom(editarProgressoLicaoAtom);

  return (
    <DefaultDialog
      open={props.open}
      onClose={() => {
        editarProgresso({
          lessonTitle: props.lessonTitle,
          state: "GABARITO_PRETESTE_VISUALIZADO",
        });
        props.onClose();
      }}
      title={props.title}
      content={props.content}
      backgroundDarkColor={props.backgroundDarkColor}
    />
    // <Dialog
    //   open={props.open}
    // onClose={() => {
    //   editarProgresso({
    //     lessonTitle: props.lessonTitle,
    //     state: "GABARITO_PRETESTE_VISUALIZADO",
    //   });
    //   props.onClose();
    // }}
    //   PaperProps={{ style: { backgroundColor: props.backgroundDarkColor } }}
    // >
    //   <DialogTitle variant="h4" color="#fff">
    //     {props.title}
    //   </DialogTitle>
    //   <DialogContent>
    //     <DialogContentText color="#fff">{props.content}</DialogContentText>
    //   </DialogContent>
    // </Dialog>
  );
};

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React from "react";

export default (props: {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element | string;
  backgroundDarkColor: string;
}) => (
  <Dialog
    open={props.open}
    onClose={props.onClose}
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

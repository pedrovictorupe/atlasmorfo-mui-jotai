import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React from "react";

export default (props: {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element | string;
  actions?: JSX.Element;
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
    {props.actions ? <DialogActions>{props.actions}</DialogActions> : undefined}
  </Dialog>
);

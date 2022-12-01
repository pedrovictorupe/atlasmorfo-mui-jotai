import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React from "react";

export default ({
  open,
  onClose,
  backgroundDarkColor,
  title,
  content,
  actions,
}: IProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    PaperProps={{ style: { backgroundColor: backgroundDarkColor } }}
  >
    <DialogTitle variant="h4" color="#fff">
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText color="#fff">{content}</DialogContentText>
    </DialogContent>
    {actions ? <DialogActions>{actions}</DialogActions> : undefined}
  </Dialog>
);

type IProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element | string;
  actions?: JSX.Element;
  backgroundDarkColor: string;
};

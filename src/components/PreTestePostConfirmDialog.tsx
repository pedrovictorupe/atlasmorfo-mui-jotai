import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import LessonStateEnum from "../@types/LessonStateEnum";

export default ({ lessonState }: DialogProps) => {
  const [isExplanationDialogOpen, setExplanationDialogOpen] = useState(true);

  return (
    <Dialog
      open={isExplanationDialogOpen && lessonState == "PRETESTE_RESPONDIDO"}
      onClose={() => {
        setExplanationDialogOpen(false);
      }}
    >
      <DialogContent>
        <DialogContentText>
          Sua resposta não será checada imediatamente. Você terá a chance de
          mudá-la após assistir ao vídeo desta seção.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setExplanationDialogOpen(false)}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

type DialogProps = {
  lessonState: LessonStateEnum;
};

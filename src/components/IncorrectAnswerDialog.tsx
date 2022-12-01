import { yellow } from "@mui/material/colors";
import React, { useState } from "react";
import DefaultPage from "../@types/DefaultPage";
import { CorrectAnswerChip } from "./AnswerChips";
import AnswerFeedback from "./AnswerFeedback";

export default ({ open, setCurrentTab, lessonTitle }: IProps) => {
  const [isAnswerIncorrectOpen, setAnswerIncorrectOpen] = useState(true);

  return (
    <AnswerFeedback
      open={open == true && isAnswerIncorrectOpen}
      onClose={() => {
        setAnswerIncorrectOpen(false);
        setCurrentTab("POS");
      }}
      title={"Quase isso"}
      content={
        <>
          A resposta correta era
          <br />
          <CorrectAnswerChip lessonTitle={lessonTitle} />
        </>
      }
      backgroundDarkColor={yellow[800]}
      lessonTitle={lessonTitle}
    />
  );
};

type IProps = {
  open: undefined | boolean;
  setCurrentTab: (tab: DefaultPage) => void;
  lessonTitle: string;
};

import { green } from "@mui/material/colors";
import React, { useState } from "react";
import DefaultTab from "../@types/DefaultTab";
import AnswerFeedback from "./AnswerFeedback";

export default ({ open, setCurrentTab }: IProps) => {
  const [isCongratulationOpen, setCongratulationsOpen] = useState(true);

  return (
    <AnswerFeedback
      open={open == true && isCongratulationOpen}
      onClose={() => {
        setCongratulationsOpen(false);
        setCurrentTab("POS");
      }}
      title={"Parabéns!"}
      content={
        <>
          Resposta correta.
          <br />
          Joãozinho deve estar orgulhoso {":)"}
        </>
      }
      backgroundDarkColor={green[700]}
    />
  );
};

type IProps = {
  open: boolean;
  setCurrentTab: (currentTab: DefaultTab) => void;
};

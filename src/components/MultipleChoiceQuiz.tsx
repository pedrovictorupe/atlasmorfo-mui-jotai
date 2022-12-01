import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useAtom, useSetAtom } from "jotai";
import { preTesteAnswerAtom } from "../atoms/preTesteAnswersAtom";

export default function MultipleChoiceQuiz(props: {
  onSubmit: () => void;
  title: string;
  pergunta: string;
  alternativas: string[];
}) {
  const saveAnswer = useSetAtom(preTesteAnswerAtom);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [tip, setTip] = React.useState("Escolha somente uma alternativa");

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption((event.target as HTMLInputElement).value);
    setTip("Clique aqui para avançar");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.onSubmit();

    saveAnswer(selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ marginTop: 3 }} variant="standard">
        <FormLabel>
          <Typography
            variant="button"
            sx={{ color: "text.primary", marginBottom: 2 }}
          >
            {props.pergunta}
          </Typography>
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={selectedOption}
          onChange={handleSelection}
        >
          {props.alternativas.map((alternativa) => (
            <FormControlLabel
              value={alternativa}
              control={<Radio />}
              label={alternativa}
              key={alternativa}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{tip}</FormHelperText>
        <Button
          sx={{
            mt: 1,
            mr: 1,
          }}
          type="submit"
          variant="outlined"
        >
          Confirmar
        </Button>
      </FormControl>
    </form>
  );
}

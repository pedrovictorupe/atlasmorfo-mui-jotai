import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useAtom } from "jotai";
import { editPreTesteAnswerAtom } from "../atoms/preTesteAnswersAtom";
import QuizProps from "../@types/QuizProps";

export default function MultipleChoiceQuiz(props: QuizProps) {
  const [, salvarResposta] = useAtom(editPreTesteAnswerAtom);
  const [alternativaSelecionada, setAlternativaSelecionada] =
    React.useState("");
  // Texto que fica acima do botão "Confirmar"
  const [dica, setDica] = React.useState("Escolha somente uma alternativa");

  // Muda o texto acima do botão Confirmar e salva a alternativa selecionada no state local do componente
  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlternativaSelecionada((event.target as HTMLInputElement).value);
    setDica("Clique aqui para avançar");
  };

  // Salva a resposta confirmada no localStorage
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Inibe que o evento continue se propagando, já que ele já está sendo tratado aqui.
    event.preventDefault();

    props.onSubmit();

    salvarResposta({
      lessonTitle: props.title,
      resposta: alternativaSelecionada,
    });
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
          value={alternativaSelecionada}
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
        <FormHelperText>{dica}</FormHelperText>
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

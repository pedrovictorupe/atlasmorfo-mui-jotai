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
import { editarRespostasAtom } from "../atoms/multiplechoice";
import QuizProps from "../@types/QuizProps";

export default function MultipleChoiceQuiz(props: QuizProps) {
  const [, salvarResposta] = useAtom(editarRespostasAtom);
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
    // Previne que o navegador despache a funcionalidade padrão de submissão de <form> (imagino que seria um POST ou algo do tipo)
    event.preventDefault();

    // Salva a resposta no localStorage para checar depois
    salvarResposta({
      lessonTitle: props.title,
      // As respostas são salvas em forma de índice ("1" para a primeira alternativa etc.), por isso é necessário usar Array.indexOf.
      // OBS: Bugs nesta seção podem decorrer caso o conteúdo passado no props.content deste componente sejam escritos à mão ao invés de ser extraído do "content/pretestes.json" (visto que, para obter o índice da alternativa, comparamos com o conteúdo de pretestes.json)
      resposta: props.alternativas.indexOf(alternativaSelecionada),
    });

    props.onSubmit()
  };

  // Para fazer: encapsular o enunciado e as alternativas em componentes próprios
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

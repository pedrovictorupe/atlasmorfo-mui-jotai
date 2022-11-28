type QuizProps = Readonly<{
  title: string;
  pergunta: string;
  alternativas: string[];
  indiceRespostaCorreta: number;
  onSubmit: () => void;
}>;

export default QuizProps;

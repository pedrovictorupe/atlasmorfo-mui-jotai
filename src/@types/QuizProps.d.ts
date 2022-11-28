type QuizProps = Readonly<{
  title: string;
  pergunta: string;
  alternativas: string[];
  indiceRespostaCorreta: number;
}>;

export default QuizProps;

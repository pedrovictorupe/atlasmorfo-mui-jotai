type QuizProps = Readonly<{
  title: string;
  pergunta: string;
  alternativas: string[];
  // indiceRespostaCorreta: number;
  respostaCorreta: string
  onSubmit: () => void;
}>;

export default QuizProps;

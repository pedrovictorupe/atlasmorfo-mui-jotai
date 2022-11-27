type QuizProps = Readonly<{
  content: {
    id: number;
    pergunta: string;
    alternativas: string[];
    respostaCorreta: number;
  };
}>;

export default QuizProps;

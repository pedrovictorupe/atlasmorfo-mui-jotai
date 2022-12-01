// Todos os valores possíveis de lessonState que o usuário pode estar em cada página de lição
type LessonStateEnum =
  | "INTRO_LIDA"
  | "PRETESTE_RESPONDIDO"
  | "GABARITO_PRETESTE_VISUALIZADO"
  | "MUDANDO_RESPOSTA"
  | "POS_TESTE_RESPONDIDO"
  // Quando o atom não foi inicializado ainda
  | undefined;

export default LessonStateEnum;

// Todas as lições começam com o pré-teste sem ter sido respondido
export const LessonStateDefault: LessonStateEnum = "INTRO_LIDA";

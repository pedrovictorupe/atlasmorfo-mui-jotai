// Todos os valores possíveis de progresso que o usuário pode estar em cada página de lição
type ProgressoEnum =
  | "INTRO_LIDA"
  | "PRETESTE_RESPONDIDO"
  | "GABARITO_PRETESTE_VISUALIZADO"
  | "POS_TESTE_RESPONDIDO";

export default ProgressoEnum;

// Todas as lições começam com o pré-teste sem ter sido respondido
export const ProgressoEnumDefault: ProgressoEnum = "INTRO_LIDA";

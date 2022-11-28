// Todos os valores possíveis de progresso que o usuário pode estar em cada página de lição
type ProgressoEnum =
  | "PRETESTE_NAO_RESPONDIDO"
  | "PRETESTE_RESPONDIDO"
  | "GABARITO_PRETESTE_VISUALIZADO"
  | "POS_TESTE_RESPONDIDO";

export default ProgressoEnum;

// Todas as lições começam com o pré-teste sem ter sido respondido
export const ProgressoEnumDefault: ProgressoEnum = "PRETESTE_NAO_RESPONDIDO";

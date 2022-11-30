import React from "react";
import { ReactElement } from "react";
import Introducao from "./lessons/JoaoEAsEtapasDaHemostasia";

// Checagem automática da formatação das rotas pelo TS
type Route = {
  path: string;
  element: ReactElement;
};

export const routes: Route[] = [
  {
    path: "/joao-e-as-etapas-da-hemostasia",
    element: <Introducao />,
  },
];

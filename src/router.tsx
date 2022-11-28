import React from "react";
import { ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import Exemplo from "./lessons/Exemplo";
import Introducao from "./lessons/Introducao";

// Checagem automática da formatação das rotas pelo TS
type Route = {
  path: string;
  element: ReactElement;
};

const routes: Route[] = [
  {
    path: "/introducao",
    element: <Introducao />,
  },
  {
    path: "/exemplo",
    element: <Exemplo />,
  },
];

export default createBrowserRouter(routes);

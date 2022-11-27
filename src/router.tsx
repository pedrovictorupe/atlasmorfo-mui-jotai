import React from "react";
import { ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import PreTeste from "./templates/PreTeste";

// Checagem automática da formatação das rotas pelo TS
type Route = {
  path: string;
  element: ReactElement;
};

const routes: Route[] = [
  {
    path: "/introducao/pre-teste",
    element: <PreTeste indicePreTeste={0} />,
  },
];

export default createBrowserRouter(routes);

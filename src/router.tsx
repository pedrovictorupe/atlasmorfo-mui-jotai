import React from "react";
import { ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import MultipleChoiceQuiz from "./components/MultipleChoiceQuiz";
import PreTeste from "./templates/PreTeste";
import preTesteContents from "./content/pretestes.json";
import Scaffold from "./components/Scaffold";
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
];

export default createBrowserRouter(routes);

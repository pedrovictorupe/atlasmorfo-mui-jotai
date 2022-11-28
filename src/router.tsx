import React from "react";
import { ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import MultipleChoiceQuiz from "./components/MultipleChoiceQuiz";
import PreTeste from "./templates/PreTeste";
import preTesteContents from "./content/pretestes.json";
import Scaffold from "./components/Scaffold";

// Checagem automática da formatação das rotas pelo TS
type Route = {
  path: string;
  element: ReactElement;
};

const routes: Route[] = [
  {
    path: "/introducao",
    element: (
      <Scaffold
        appBarTitle="Atlas Morfo"
        drawerItems={[{ lesson: "Introdução", pages: ["Pré-teste"] }]}
      >
        <PreTeste
          quiz={<MultipleChoiceQuiz {...preTesteContents.introducao} />}
        />
      </Scaffold>
    ),
  },
];

export default createBrowserRouter(routes);

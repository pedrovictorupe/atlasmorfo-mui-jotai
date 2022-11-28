import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "jotai";
import Scaffold from "./components/Scaffold";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Provider>
      <CssBaseline />
      <Scaffold
        appBarTitle="Atlas Morfo"
        drawerItems={[{ lesson: "Introdução", pages: ["Pré-teste"] }]}
        drawerTitle={"Sumário"}
      >
        <RouterProvider router={router} />
      </Scaffold>
    </Provider>
  </React.StrictMode>
);

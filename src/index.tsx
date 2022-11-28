import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "jotai";
import Scaffold from "./components/Scaffold";
import contents from "./content.json";
import keys from "lodash/keys";
import SumarioDrawer from "./components/SumarioDrawer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Provider>
      <CssBaseline />
      <Scaffold
        drawer={
          <SumarioDrawer drawerTitle={"SUMÁRIO"} drawerItems={keys(contents)} />
        }
        appBarTitle={"ATLAS MORFO"}
      >
        <RouterProvider router={router} />
      </Scaffold>
    </Provider>
  </React.StrictMode>
);

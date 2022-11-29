import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "jotai";
import Scaffold from "./components/Scaffold";
import contents from "./contents.json";
import keys from "lodash/keys";
import SumarioDrawer from "./components/ScaffoldDrawer";
import { RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Provider>
      <CssBaseline />
      <Scaffold></Scaffold>
    </Provider>
  </React.StrictMode>
);

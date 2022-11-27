import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "jotai";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* Provider do jotai */}
      <Provider>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

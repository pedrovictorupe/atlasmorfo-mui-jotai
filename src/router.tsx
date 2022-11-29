import React from "react";
import { ReactElement } from "react";
import Introducao from "./lessons/Introducao";

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

// export default createBrowserRouter(routes);

// // export default (
// //   <BrowserRouter>
// //     <Routes>
// //       <Route index element={<Introducao />} />
// //       <Route path="introducao" element={<Introducao />} />
// //       <Route path="/exemplo" element=z{<Exemplo />} />
// //     </Routes>
// //   </BrowserRouter>
// // );

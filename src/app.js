import React from "react";
import { Provider } from "./context/api";
import Home from "./pages/home";
export default () => (
  <Provider>
    <Home />
  </Provider>
);

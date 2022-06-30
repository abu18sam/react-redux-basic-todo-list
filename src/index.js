import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import Store from "./redux/store/Store";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

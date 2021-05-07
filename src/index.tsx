import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StoreWrapper from "./store";

const renderer = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderer(
  <React.StrictMode>
    <StoreWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  reportWebVitals(console.log);
}

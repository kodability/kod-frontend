import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import LandingPage from "@/pages/LandingPage";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

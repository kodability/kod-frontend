import NotFoundPage from "@/pages/404";
import ChallengeLandingPage from "@/pages/challenge/ChallengeLandingPage";
import ChallengeTryPage from "@/pages/challenge/ChallengeTryPage";
import LandingPage from "@/pages/Landing";
import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/challenge/try">
        <ChallengeTryPage />
      </Route>
      <Route path="/challenge">
        <ChallengeLandingPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;

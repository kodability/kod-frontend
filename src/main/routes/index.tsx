import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "src/pages/404";
import ChallengeLandingPage from "src/pages/challenge/ChallengeLandingPage";
import ChallengingPage from "src/pages/challenge/ChallengeTryPage";
import LandingPage from "src/pages/Landing";
import ChallengeRoute from "./ChallengeRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/challenge">
        <ChallengeLandingPage />
      </Route>
      <ChallengeRoute path="/challenge/try" page={ChallengingPage} />
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;

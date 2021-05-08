import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "src/modules/404";
import ChallengePage from "src/modules/Challenge";
import LandingPage from "src/modules/Landing";
import ChallengeRoute from "./ChallengeRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <ChallengeRoute
        path="/challenge"
        validChallenge={false}
        page={ChallengePage}
      />
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;

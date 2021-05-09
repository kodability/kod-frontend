import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "@/pages/404";
import ChallengeLandingPage from "@/pages/challenge/ChallengeLandingPage";
import ChallengingPage from "@/pages/challenge/ChallengeTryPage";
import LandingPage from "@/pages/Landing";
import ChallengeRoute from "@/routes/ChallengeRoute";

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

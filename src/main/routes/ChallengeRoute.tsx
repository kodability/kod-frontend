import React from "react";
import { Redirect, RouteProps } from "react-router-dom";

export interface IProps {
  validChallenge: boolean;
  page: React.ComponentType<unknown>;
}

const ChallengeRoute: React.FC<IProps & RouteProps> = (props) => {
  const Page: React.ComponentType<unknown> = props.page;
  if (props.validChallenge) {
    return <Page {...props} />;
  } else {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: props.location },
        }}
      />
    );
  }
};
export default ChallengeRoute;

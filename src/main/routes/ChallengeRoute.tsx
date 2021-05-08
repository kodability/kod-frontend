import React from "react";
import { Redirect, RouteProps } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { challengeStateAtom } from "src/main/recoil/auth/atom";

export interface IProps {
  page: React.ComponentType<unknown>;
}

const ChallengeRoute: React.FC<IProps & RouteProps> = (props) => {
  const Page: React.ComponentType<unknown> = props.page;
  const challengeState = useRecoilValue(challengeStateAtom);
  if (challengeState?.state === "started") {
    return <Page {...props} />;
  } else {
    return (
      <Redirect
        to={{
          pathname: "/challenge",
          state: { from: props.location },
        }}
      />
    );
  }
};
export default ChallengeRoute;

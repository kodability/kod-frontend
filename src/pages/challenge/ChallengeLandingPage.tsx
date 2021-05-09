import { fetchChallengeState } from "@/api/auth";
import { challengeStateAtom } from "@/recoil/auth/atom";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

const TRY_URL = "/challenge/try";

const ChallengeLandingPage: React.FC = () => {
  const [challengeState, setChallengeState] = useRecoilState(
    challengeStateAtom
  );
  const query = new URLSearchParams(useLocation().search);
  const cid = query.get("cid") || "";

  useEffect(() => {
    setChallengeState(() => null);
    fetchChallengeState(cid).then((challengeState) => {
      setChallengeState((current) => challengeState || current);
    });
  }, [cid, setChallengeState]);

  const history = useHistory();

  console.log(challengeState);
  if (challengeState == null) {
    return <div>Loading...</div>;
  }

  function onStart() {
    history.push(TRY_URL);
  }

  switch (challengeState.state) {
    case "started":
      return <button onClick={onStart}>continue</button>;
    case "waiting":
      return <button onClick={onStart}>Start</button>;
    case "finished":
      return (
        <div>finished at {challengeState.finishedAt.toLocaleString()}</div>
      );
    case "expired":
      return <div>expired</div>;
    case "invalid":
      return <div>invalid cid</div>;
  }
};

export default ChallengeLandingPage;

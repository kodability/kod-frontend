import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { fetchChallengeState } from "src/library/api/auth";
import { challengeStateAtom } from "src/main/recoil/auth/atom";

const TRY_URL = "/challenge/try";

const ChallengeLandingPage: React.FC = () => {
  const [challengeState, setChallengeState] = useRecoilState(
    challengeStateAtom
  );
  const query = new URLSearchParams(useLocation().search);
  const cid = query.get("cid") || "";

  useEffect(() => {
    fetchChallengeState(cid).then((challengeState) => {
      setChallengeState((current) => challengeState || current);
    });
  }, [cid, setChallengeState]);

  const history = useHistory();

  // redirect to TRY_URL if already started.
  if (challengeState?.state === "started") {
    history.push(TRY_URL);
  }

  const enableStart = challengeState?.state === "waiting";

  function onStart() {
    history.push(TRY_URL);
  }

  return (
    <div>
      <ul>
        <li>id: {cid}</li>
        <li>state: {JSON.stringify(challengeState)}</li>
      </ul>
      {enableStart && <button onClick={onStart}>Start</button>}
    </div>
  );
};

export default ChallengeLandingPage;

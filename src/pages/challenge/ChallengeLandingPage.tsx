import { fetchChallengeState } from "@/api/auth";
import { challengeStateAtom } from "@/recoil/auth/atom";
import { Alert, Button, Code, LoadingOverlay } from "@mantine/core";
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

  if (challengeState == null) {
    return <LoadingOverlay visible={true} />;
  }

  function onStart() {
    history.push(TRY_URL);
  }

  switch (challengeState.state) {
    case "started":
      return (
        <Button color="blue" onClick={onStart}>
          continue
        </Button>
      );
    case "waiting":
      return (
        <Button color="blue" onClick={onStart}>
          Start
        </Button>
      );
    case "finished":
      return (
        <Alert color="red" title="finished">
          finished at {challengeState.finishedAt.toLocaleString()}
        </Alert>
      );
    case "expired":
      return (
        <Alert color="red" title="expired">
          DueDate: {challengeState.dueDate.toLocaleString()}
        </Alert>
      );
    case "invalid":
      return (
        <Alert color="red" title="Invalid Request">
          Requested with invalid id: <Code color="red">{cid}</Code>
        </Alert>
      );
  }
};

export default ChallengeLandingPage;

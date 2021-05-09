import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const LandingPage = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const onChallenge = (cid: string) => {
    history.push(`/challenge?cid=${cid}`);
  };

  return (
    <div>
      <Title>{t("page.index")}</Title>
      <button onClick={() => onChallenge("waiting")}>Challenge waiting</button>
      <button onClick={() => onChallenge("started")}>Challenge started</button>
      <button onClick={() => onChallenge("finished")}>
        Challenge finished
      </button>
      <button onClick={() => onChallenge("expired")}>Challenge expired</button>
      <button onClick={() => onChallenge("1234")}>Challenge invalid</button>
    </div>
  );
};

export default LandingPage;

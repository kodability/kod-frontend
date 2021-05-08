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

  const onChallenge = () => {
    history.push("/challenge?cid=1234");
  };

  return (
    <div>
      <Title>{t("page.index")}</Title>
      <button onClick={onChallenge}>Challenge</button>
    </div>
  );
};

export default LandingPage;

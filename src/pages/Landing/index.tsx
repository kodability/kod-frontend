import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@mantine/core";

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
      <Button
        variant="outline"
        color="indigo"
        onClick={() => onChallenge("waiting")}
      >
        Challenge waiting
      </Button>
      <Button
        variant="outline"
        color="lime"
        onClick={() => onChallenge("started")}
      >
        Challenge started
      </Button>
      <Button
        variant="outline"
        color="yellow"
        onClick={() => onChallenge("finished")}
      >
        Challenge finished
      </Button>
      <Button
        variant="outline"
        color="red"
        onClick={() => onChallenge("expired")}
      >
        Challenge expired
      </Button>
      <Button variant="outline" color="red" onClick={() => onChallenge("1234")}>
        Challenge invalid
      </Button>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title>{t("page.index")}</Title>
      <button>Start</button>
    </div>
  );
};

export default LandingPage;

import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import CodeEditor from "@/components/CodeEditor";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const LandingPage = () => {
  const { t } = useTranslation();
  const code = `const list: number[] = [1,2,3,4];
const sum: number = list.reduce((prev, cur) => prev + cur, 0);
console.log(sum);
`;

  return (
    <div>
      <Title>{t("page.index")}</Title>
      <CodeEditor language="typescript" code={code} />
    </div>
  );
};

export default LandingPage;

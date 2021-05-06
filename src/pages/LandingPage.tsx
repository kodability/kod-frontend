import * as React from "react";
import { useTranslation } from "react-i18next";
import MonacoEditor from "react-monaco-editor";
import styled from "styled-components";

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
  // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <>
      <Title>{t("page.index")}</Title>
      <MonacoEditor
        width="800"
        height="600"
        language="typescript"
        theme="vs-dark"
        value={code}
        options={options}
      />
    </>
  );
};

export default LandingPage;

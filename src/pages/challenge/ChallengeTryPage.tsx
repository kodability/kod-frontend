import { challengeStateAtom } from "@/recoil/auth/atom";
import React from "react";
import CodeEditor from "@/components/CodeEditor";
import MarkdownViewer from "@/components/MarkdownViewer";
import { useRecoilValue } from "recoil";

const ChallengeTryPage: React.FC = () => {
  const code = `const list: number[] = [1,2,3,4];
const sum: number = list.reduce((prev, cur) => prev + cur, 0);
console.log(sum);
`;
  const markdown = `
# TypeScript

solve *this*.  
`;
  const challengeState = useRecoilValue(challengeStateAtom);
  console.log("state", challengeState);

  // TODO: redirect to landing page on invalid state

  return (
    <div>
      <MarkdownViewer markdown={markdown} />
      <CodeEditor language="typescript" code={code} />
    </div>
  );
};

export default ChallengeTryPage;

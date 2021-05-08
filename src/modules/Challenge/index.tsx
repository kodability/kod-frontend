import React from "react";
import CodeEditor from "src/library/common/components/CodeEditor";

const ChallengePage: React.FC = () => {
  const code = `const list: number[] = [1,2,3,4];
const sum: number = list.reduce((prev, cur) => prev + cur, 0);
console.log(sum);
`;

  return (
    <div>
      <CodeEditor language="typescript" code={code} />
    </div>
  );
};

export default ChallengePage;

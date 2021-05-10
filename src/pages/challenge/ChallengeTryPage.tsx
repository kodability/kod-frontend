import CodeEditor from "@/components/CodeEditor";
import MarkdownViewer from "@/components/MarkdownViewer";
import { challengeStateAtom } from "@/recoil/auth/atom";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Select } from "@mantine/core";

const ChallengeTryPage: React.FC = () => {
  const [language, setLanguage] = useState("typescript");

  const code = `
const list: number[] = [1,2,3,4];
const sum: number = list.reduce((prev, cur) => prev + cur, 0);
console.log(sum);
`;
  const markdown = `
# TypeScript

solve *this*.  
`;
  const cs = useRecoilValue(challengeStateAtom);
  if (!cs || cs.state === "invalid") {
    return <h2>Invalid request</h2>;
  }
  switch (cs.state) {
    case "started":
      break;
    case "waiting":
      break;
    case "expired":
      return <h2>Expired. Duedate was {cs.dueDate.toLocaleString()}</h2>;
    case "finished":
      return <h2>Finished at {cs.finishedAt.toLocaleString()}</h2>;
  }

  const onLangChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div>
      <Select
        data={[
          { value: "cpp", label: "C++" },
          { value: "csharp", label: "C#" },
          { value: "go", label: "Go" },
          { value: "java", label: "Java" },
          { value: "javascript", label: "JavaScript" },
          { value: "julia", label: "Julia" },
          { value: "kotlin", label: "Kotlin" },
          { value: "python", label: "Python" },
          { value: "rust", label: "Rust" },
          { value: "scala", label: "Scala" },
          { value: "swift", label: "Swift" },
          { value: "typescript", label: "TypeScript" },
        ]}
        placeholder={language}
        label="Select language to use"
        onChange={(e) => onLangChange(e.currentTarget.value)}
      />
      <MarkdownViewer markdown={markdown} />
      <CodeEditor language={language} code={code} />
    </div>
  );
};
export default ChallengeTryPage;

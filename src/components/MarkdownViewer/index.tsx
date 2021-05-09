import React from "react";
import ReactMarkdown from "react-markdown";

interface IProps {
  markdown: string;
}

const MarkdownViewer = (props: IProps) => {
  return <ReactMarkdown>{props.markdown || ""}</ReactMarkdown>;
};

export default MarkdownViewer;

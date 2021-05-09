import debounce from "debounce";
import * as Monaco from "monaco-editor/esm/vs/editor/editor.api";
import ReactResizeObserver from "rc-resize-observer";
import React from "react";
import MonacoEditor from "react-monaco-editor";

interface Props {
  code?: string | null;
  language: string;
}

class CodeEditor extends React.PureComponent<Props> {
  private editor?: Monaco.editor.IStandaloneCodeEditor;

  constructor(props: Props) {
    super(props);
  }

  private handleEditorMount(e: Monaco.editor.IStandaloneCodeEditor) {
    this.editor = e;
  }

  private handleEditorChange(code: string) {
    // TODO: send code to server
  }

  public render() {
    return (
      <ReactResizeObserver
        onResize={({ width, height }) => {
          this.editor?.layout({ width, height });
        }}
      >
        <MonacoEditor
          width={"100%"}
          height={400}
          language={this.props.language}
          theme="vs-dark"
          value={this.props.code}
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
          }}
          onChange={debounce(this.handleEditorChange, 1000)}
          editorDidMount={(e) => this.handleEditorMount(e)}
        />
      </ReactResizeObserver>
    );
  }
}

export default CodeEditor;

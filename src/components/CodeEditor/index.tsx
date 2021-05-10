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
  private monaco?: typeof Monaco;

  constructor(props: Props) {
    super(props);
  }

  public shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    if (this.props.language !== nextProps.language) {
      if (this.editor && this.monaco) {
        const model = this.editor.getModel();
        if (model) {
          this.monaco.editor.setModelLanguage(model, nextProps.language);
        }
      }
    }
    return true;
  }

  private handleEditorMount(
    e: Monaco.editor.IStandaloneCodeEditor,
    monaco: typeof Monaco
  ) {
    this.editor = e;
    this.monaco = monaco;
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
          editorDidMount={(editor, monaco) =>
            this.handleEditorMount(editor, monaco)
          }
        />
      </ReactResizeObserver>
    );
  }
}

export default CodeEditor;

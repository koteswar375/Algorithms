import './Problem.css';
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-jsx";
const languages = [
  "javascript",
  "java",
  "python",
  "xml",
  "ruby",
  "sass",
  "markdown",
  "mysql",
  "json",
  "html",
  "handlebars",
  "golang",
  "csharp",
  "elixir",
  "typescript",
  "css"
];

const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
  "terminal"
];

languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */

const onChange = (newValue) => {
    console.log("change", newValue);
  }
const fontSize = 14;
const Problem = (props) => {
    return (
        <div className="problem">
            <div className="pd border-end border-secondary">
                <span>Problem Description</span>
                <div>

                </div>
            </div>
                <AceEditor
                    mode="python"
                    theme="twilight"
                    onChange={onChange}
                    name="UNIQUE_ID_OF_DIV"
                    className="editor border-start border-secondary"
                    height= '95vh'
                    width='25vw'
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                      useWorker: false,
                      enableBasicAutocompletion: false,
                      enableLiveAutocompletion: false,
                      enableSnippets: true
                    }}
                    showPrintMargin={false}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={``}
                    fontSize={fontSize}
                />
        </div>
    )
}


export default Problem
import React, { useState, useEffect } from 'react';
import AceEditor from "react-ace";
import './Editor.css';
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
const code = "class Solution: \n\n\tprevious = None\n\tinorder_successor_node = None\n\n\tdef inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':\n\t\tself.previous, self.inorder_successor_node = None, None\n\t\t# Case 1: We simply need to find the leftmost node in the subtree rooted at p.right.\n\t\tif p.right:\n\t\t\tleftmost = p.right\n\t\t\twhile leftmost.left:\n\t\t\t\tleftmost = leftmost.left\n\t\t\tself.inorder_successor_node = leftmost\n\t\t# Case 2: We need to perform the standard inorder traversal and keep track of the previous node.\n\t\telse:\n\t\t\tself.inorderCase2(root, p)\n\t\treturn self.inorder_successor_node\n\n\n\tdef inorderCase2(self, node: 'TreeNode', p: 'TreeNode'):\n\t\tif not node:\n\t\t\treturn\n\t\t# Recurse on the left side\n\t\tself.inorderCase2(node.left, p)\n\t\t# Check if previous is the inorder predecessor of node\n\t\tif self.previous == p and not self.inorder_successor_node:\n\t\t\tself.inorder_successor_node = node\n\t\t\treturn\n\t\t# Keeping previous up-to-date for further recursions\n\t\tself.previous = node\n\t\t# Recurse on the right side\n\t\tself.inorderCase2(node.right, p)"

const Editor = (props) => {

  const [value, setValue] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    setValue(code)
  });

  return (
    <AceEditor
      mode="python"
      theme="twilight"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      className="editor border-start border-secondary flex-grow-1"
      height='95vh'
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
      value={value}
      fontSize={fontSize}
    />)
}


export default Editor
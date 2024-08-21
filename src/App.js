// src/App.js
import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  breaks: true,
});
const App = () => {
  const [markdown, setMarkdown] = useState(defaultText);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <div className="editor-container">
        <h2>Markdown Editor</h2>
        <textarea id="editor" value={markdown} onChange={handleChange} />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

const defaultText = `
# Heading 1

## Sub-heading

This is a [link](https://www.example.com).

\`Inline code\`

\`\`\`
Block code
\`\`\`

- List item

> Blockquote

![Alt text](https://via.placeholder.com/150)

**Bold text**
`;

export default App;

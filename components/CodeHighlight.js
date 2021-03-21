import { createRef, useEffect } from "react";
import highlight from "highlight.js";
import { findDOMNode } from "react-dom";
import "highlight.js/styles/ocean.css";

export default function CodeHighlight({ language, children }) {
  const code = createRef();
  useEffect(() => {
    highlight.highlightBlock(findDOMNode(code.current));
  }, []);
  return (
    <pre data-language={language}>
      <code ref={code} className={`${language} rounded-lg`}>
        {children}
      </code>
    </pre>
  );
}

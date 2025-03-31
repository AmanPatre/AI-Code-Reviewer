import "./App.css";
import { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [code, setCode] = useState(`function sum(){ return a+b}`);
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    const response = await axios.post("https://ai-code-reviewer-rjvs.onrender.com", {
      code,
    });
    setReview(response.data);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code" , "Fira Mono" , monospace',
                fontSize: 12,
                border: "1px solid #ddd",
                borderRadius: "5px",

                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="buttonn">
            <button onClick={reviewCode}>Review</button>
          </div>
        </div>
        <div className="right">
          <ReactMarkdown>{review}</ReactMarkdown>
        </div>
      </main>
    </>
  );
}

export default App;

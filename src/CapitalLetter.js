import React, { useState } from "react";
import "./style.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1> Text Conversion</h1>
      </div>
      <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="secondary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="primary " onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button
          className="copy"
          onClick={() => navigator.clipboard.writeText(`${text}`)}
        >
          Copy
        </button>
        <h3>Text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}

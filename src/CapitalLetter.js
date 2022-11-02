import React, { useState } from "react";


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
  
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
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
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        
      </div>
      <div className="container my-3">
        <h1>Your Text Summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}

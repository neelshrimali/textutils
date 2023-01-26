import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleRevClick = () => {
    let reverseText = text.split("");
    reverseText = reverseText.reverse();
    reverseText = reverseText.join("");
    reverseText = reverseText.replace(",", "");
    setText(reverseText);
    props.showAlert("Converted to reverse order!","success");

  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied successfully!","success");

  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed successfully!","success");

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Textbox cleared!","success");

  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            rows="6"
            value={text}
            style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert To lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRevClick}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.length===0?'0':text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{text.length===0?'0':0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"To preview here, please enter something in the textbox above!"}</p>
      </div>
    </>
  );
}

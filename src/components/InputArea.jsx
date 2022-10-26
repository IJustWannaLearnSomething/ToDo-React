import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function changeHandler(event) {
    const value = event.target.value;
    setInputText(value);
  }

  return (
    <div className="form">
      <input onChange={changeHandler} type="text" value={inputText} />
      <button
        onClick={() => {
          setInputText("");
          return props.addItems(inputText);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

import React, { useState } from "react";

function App() {
  const [listItemArray, setListItemArray] = useState([
    { valueOfItem: "A Item.", id: 0 },
  ]);
  const [inputText, setInputText] = useState("");

  function changeHandler(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function clickHandler() {
    setListItemArray((prevListItemArray) => [
      ...prevListItemArray,
      { valueOfItem: inputText, id: prevListItemArray.length },
    ]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={inputText} />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItemArray.map((listItem) => (
            <li key={listItem.id}>{listItem.valueOfItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

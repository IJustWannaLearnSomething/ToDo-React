import React, { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
import ToDoList from "./ToDoList";

function App() {
  const [listItemArray, setListItemArray] = useState([]);

  function addItems(inputText) {
    setListItemArray((prevListItemArray) => [
      ...prevListItemArray,
      {
        valueOfItem: inputText,
        id: prevListItemArray.length
          ? prevListItemArray[prevListItemArray.length - 1].id + 1
          : 0,
      },
    ]);
  }

  function deleteItem(id) {
    setListItemArray((prevListItemArray) => {
      return prevListItemArray.filter((listItem) => listItem.id !== id);
    });
  }

  return (
    <div className="container">
      <Heading />
      <InputArea addItems={addItems} />
      <ToDoList items={listItemArray} delete={deleteItem} />
    </div>
  );
}

export default App;

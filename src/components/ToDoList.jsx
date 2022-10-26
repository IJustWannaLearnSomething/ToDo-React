import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <div>
      <ul>
        {props.items.map((listItem) => (
          <ToDoItem
            key={listItem.id}
            valueOfItem={listItem.valueOfItem}
            id={listItem.id}
            onCheck={() => props.delete(listItem.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

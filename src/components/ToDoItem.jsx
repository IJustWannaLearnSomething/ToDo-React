import React from "react";

function ToDoItem(props) {
  return <li onClick={() => props.onCheck(props.id)}>{props.valueOfItem}</li>;
}

export default ToDoItem;

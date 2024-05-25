import React, { useState } from "react";
import Update from "./Update";

export default function Todoitem(props) {
  const [showUpdate, setshowUpdate] = useState(false);
  const handleClick = (value) => {
    setshowUpdate(value);
  };
  console.log("sno", props.todo.sno);

  return (
    <div>
      <h6>{props.todo.title}</h6>
      <p>{props.todo.desc}</p>
      <button
        className="btn btn-danger"
        onClick={() => props.onDelete(props.todo)}
      >
        DELETE
      </button>
      <button
        className="btn btn-info mx-2"
        id="btn"
        onClick={() => handleClick(true)}
      >
        Update
      </button>
      {showUpdate && (
        <Update
          sno={props.todo.sno}
          onUpdate={props.onUpdate}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

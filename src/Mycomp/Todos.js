import React from "react";
import Todoitem from "../Mycomp/Todoitem";

export default function todos(props) {
  return (
    <div className="container">
      <h3 className="text-center my-3">To-Do List</h3>
      {props.todos.length === 0
        ? "🥳Congratulations💫 You Completed All Tasks"
        : props.todos
            .filter((todo) =>
              todo.title.toLowerCase().includes(props.Reqsearch.toLowerCase())
            )
            .map((todo) => {
              return (
                <Todoitem
                  todo={todo}
                  onDelete={props.onDelete}
                  onUpdate={props.onUpdate}
                />
              );
            })}
    </div>
  );
}

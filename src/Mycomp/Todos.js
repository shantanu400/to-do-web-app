import React from "react";
import Todoitem from "../Mycomp/Todoitem";

export default function todos(props) {
  return (
    <div>
          <div className="container">
      <h3 className="text-center my-3">To-Do List</h3>
      {props.todos.length === 0
        ? "💫Please Add Task"
        : props.todos
            .filter((todo) =>
              (todo.title.toLowerCase().includes(props.Reqsearch.toLowerCase() )&& (todo.isCompleted==0))
            )
            .map((todo) => {
             
              return (
                <Todoitem
                  todo={todo}
                  
                  onDelete={props.onDelete}
                  onUpdate={props.onUpdate}
                  setCompleted={props.setCompleted}
                />
              );
            })}
   
    </div>

    <div className="container">
      <h3 className="text-center my-3">Completed Task</h3>
      {props.todos.length === 0
        ? "💫Please Add Task"
        : props.todos
            .filter((todo) =>
              (todo.title.toLowerCase().includes(props.Reqsearch.toLowerCase() )&& (todo.isCompleted==1))
            )
            .map((todo) => {
             
              return (
                <Todoitem
                  todo={todo}
  
                  onDelete={props.onDelete}
                  onUpdate={props.onUpdate}
                  setCompleted={props.setCompleted}
                />
              );
            })}
   
    </div>

    </div>
  
    
  );
}

import React, { useState } from "react";

export default function Addtodo(props) {
  const [title, settitle] = useState("");  
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();   //page prevented to reload
    if (!title || !desc) {
      alert("Title or Desc is left Empty!"); // if form not filled
    } else props.addtodo(title, desc);
    settitle(""); //after submitting form make form empty
    setdesc(""); //after submitting form make form empty
  };

  return (
    <div className="container my-2">
      <h3>Add To-Do</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input            //taking value of title
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input                //taking value of Description
            type="text"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';


export default function Update(props) {
    const [title, settitle]=useState("");
    const [desc, setdesc] = useState("");

    const submit=(e)=>{
      console.log("in submit");
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Desc is left Empty!');
        }
        else 
        props.onUpdate(props.sno,title,desc);
        props.handleClick(false);
        settitle("") ;
        setdesc("");
    }


  return (
    <div className='container my-2'>
       
<form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
 
  <button type="submit" className="btn btn-success">Update</button>
</form>
    </div>
  )
}

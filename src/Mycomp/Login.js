import React, { useState, useRef } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const userEmailRef = useRef();  //Initialization
  const passwordRef = useRef();   //Initialization
  const [loading, setLoading] = useState(false);   //will be used to show status while we will be logging in OR SignUp
  const navigate = useNavigate(); // Corrected useNavigate

  async function submit(e) {
    e.preventDefault();      //page prevented to reload
    let email = userEmailRef.current.value;   //set the cuurent value of form into email
    let password = passwordRef.current.value;  ////set the cuurent value of form into password
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);   //code will not run ahead till wait is over to verify
      alert("Log In Succesful");
      navigate("/"); // Corrected to use navigate hook
    } catch (error) {
      alert(error.message); // Simplified alert to show if any
    }

    setLoading(false);    //made it false to use it to show status that authentication successful & login done
  }

  return (
    <div className="container my-2 mx-6">
      <h3 className="text-center my-3">Login Here</h3>
      <form onSubmit={submit}>  
        <div className="mb-3">
          <input
            type="text"
            required
            ref={userEmailRef}
            placeholder="Email"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            required
            ref={passwordRef}
            placeholder="Password"
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success" disabled={loading}> 
        {/* disabled={loading}: button will be disabled when the loading state/prop is true */}
            {/* Below is used loading to show status of logging in or logged in */}
          {loading ? "logging in..." : "log in"}  
        </button>
      </form>
    </div>
  );
}

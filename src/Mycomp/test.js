import React, { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  async function handleSubmit(e) {
    e.preventDefault();  //page prevented to reload

    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let passwordConfirm = passwordConfirmRef.current.value;
    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
        });
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        alert(error, error.code, email, password);
      });
    setLoading(false);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="name" ref={nameRef} required placeholder="Name" />
        <input type="email" ref={emailRef} required placeholder="Email" />
        <input
          type="password"
          ref={passwordRef}
          required
          placeholder="Password"
        />
        <input
          type="password"
          ref={passwordConfirmRef}
          required
          placeholder="Confirm Password"
        />
        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

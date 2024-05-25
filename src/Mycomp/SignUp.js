import React, { useState, useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function SignUp() {
    const userEmailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Corrected useNavigate

    async function submit(e) {
        e.preventDefault();
        let email = userEmailRef.current.value;
        let password = passwordRef.current.value;
        setLoading(true);
// 
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            alert('Sign Up Succesful, Please Refresh the page')
            console.log(userCredential);
            const user = userCredential.user;
            await updateProfile(user, { displayName: email });
            console.log(user);
            navigate('/'); // Corrected to use navigate hook
        } catch (error) {
            alert(error.message); // Simplified alert
        }

        setLoading(false);
    }

    return (
        <div className='container my-2 mx-6'>
            <h3 className="text-center my-3">SignUp Here</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <input type="text" required ref={userEmailRef} placeholder="Email" className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="password" required ref={passwordRef} placeholder="Password" className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success" disabled={loading}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
}

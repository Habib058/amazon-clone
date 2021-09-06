import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    // const history = useHistory()
    const history = useHistory()

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                if(userCredential){
                    history.push('/')
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                if (userCredential) {
                    history.push('/');
                }
                console.log(userCredential);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <h5>Password</h5>
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By Signing-in you agree to Amazon's Fake Clone Conditions of use & Sale. Please see our Privacy Notice,Our Cookies Notice and our Interest-Based Ads
                </p>
                <button onClick={register} className="login_registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    );
};

export default Login;
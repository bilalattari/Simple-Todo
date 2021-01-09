import React, { useState } from 'react'
import firebase from '../config/firebase'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {
        if (email != '' && password !== '' ) {
           
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(async(user) => {
                    console.log( user.user.uid)
                    await localStorage.setItem('userId' , user.user.uid)

                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                })
        } else {
            alert('Enter proper details')
        }

    }


    const goToRegister = () => props.history.push('/register')
    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'email'} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'password'} type={"password"} />
            <button onClick={goToRegister}>Register</button>

            <button onClick={loginUser}>login</button>
        </div>)
}

export default Login;

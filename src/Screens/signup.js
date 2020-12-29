import React, { useEffect, useState } from 'react'
import firebase from '../config/firebase'
function SignUp(props) {
        const [name, setName] = useState('')
        const [education, setEducation] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const registerUser = () => {
            if (email != '' && password !== '' && name !== '' && education !== '') {
                let userObj = {
                    email,
                    name,
                    education
                }
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(async (user) => {
                        console.log(user.user.uid, user)
                        userObj.id = user.user.uid
                        await localStorage.setItem('userId' , user.user.uid)
                        firebase.database().ref('users/' + user.user.uid + '/').set(userObj)
                        setPassword('')
                        setEmail('')
                        setEducation('')
                        setName('')
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


        const goToLogin = ()=> props.history.push('/login')

        return (
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder={'name'} />
                <input value={education} onChange={(e) => setEducation(e.target.value)} placeholder={'educationF'} />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'email'} />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'password'} type={"password"} />
                <button onClick={registerUser}>Register</button>
                <button onClick = {goToLogin}>login</button>
            </div>
    );
}

export default SignUp;

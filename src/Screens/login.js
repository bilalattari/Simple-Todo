import React, { useState } from 'react'
import { connect } from 'react-redux'

import firebase from '../config/firebase'
import { loginUser } from '../Store/action/auth'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {
        if (email != '' && password !== '') {
            props.loginUser(email, password)
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


const mapDispatchToProps = (dispatch) => {
    return ({
        loginUser: (email, password) => { dispatch(loginUser(email, password)) }
    })
}

export default connect(null, mapDispatchToProps)(Login)

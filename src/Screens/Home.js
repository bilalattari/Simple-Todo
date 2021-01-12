import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { Button } from '../Button'
import firebase from '../config/firebase'
import { getUserData } from '../Store/action/auth'

function Home(props) {

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                props.getUserData(user.uid)
                props.history.push('/about')
            } else {
                console.log('User is not signed in')
                props.history.push('/login')

            }
        });
    });
    const goToAboutPage = () => {
        props.history.push('/about')
    }

    return (
        <div>
            Home

            <Button title={"Go to about page"} onClick={goToAboutPage} />
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return ({
        getUserData: (uid) => dispatch(getUserData(uid))
    })
}

export default connect(null, mapDispatchToProps)(Home)

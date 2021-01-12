import firebase from '../../config/firebase'


import { CHANGE_USER_NAME, UPATE_USER_INFO } from '../constant/index';

export function changeUserName() {
    return dispatch => dispatch({ type: CHANGE_USER_NAME, payload: 'Ali' })

}


export function loginUser(email, password) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (user) => {
                console.log(user.user.uid)
                // getUserData(user.user.uid)
                // await localStorage.setItem('userId' , user.user.uid)

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            })
        // dispatch({ type: CHANGE_USER_NAME, payload: 'Ali' })
    }
}

export function getUserData(uid) {
    return dispatch => {
        var db = firebase.database()
        db.ref('users/' + uid).once('value').then((data) => {
            console.log(data.val(), 'user data from firebase in redux')
            dispatch({ type: UPATE_USER_INFO, payload: data.val() })

        }).catch((err) => console.log(err))

    }
}
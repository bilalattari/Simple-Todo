


import { CHANGE_USER_NAME } from '';

export function changeUserName() {
    return dispatch => dispatch({ type: CHANGE_USER_NAME, payload: 'Ali' })

}
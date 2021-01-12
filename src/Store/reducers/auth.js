import { CHANGE_USER_NAME, UPATE_USER_INFO } from '../constant';

const INITIAL_STATE = {
    userName: 'Bilal',
    userInfo: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return ({
                ...state,
                userName: action.payload
            })
        case UPATE_USER_INFO:
            return ({
                ...state,
                userInfo: action.payload
            })
        default:
            return state;
    }

}
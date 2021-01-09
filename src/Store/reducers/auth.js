import { CHANGE_USER_NAME } from '../constant';

const INITIAL_STATE = {
    userName: 'Bilal'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return ({
                ...state,
                userName: action.payload
            })
        default:
            return state;
    }

}
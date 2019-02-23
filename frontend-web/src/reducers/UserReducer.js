import {SET_USER, SIGN_OUT} from "../actions/UserActions";

const INITIAL_STATE = {
    username: '',
    id: '',
    token: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, ...action.payload };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
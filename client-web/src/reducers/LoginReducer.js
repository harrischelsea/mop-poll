import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    GET_USER_STARTED,
    GET_USER_FAILED,
    GET_CURRENT_USER_SUCCESS
} from "../actions/LoginActions";
import {SIGN_OUT} from "../actions/UserActions";

const INITIAL_STATE = {
    username: '',
    password: '',
    loading: false,
    error: '',
    successLogin: false,
    getUserLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            return {...state, username: action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return {...INITIAL_STATE, successLogin: true};
        case LOGIN_USER_FAIL:
            return {...state, error: action.payload, loading: false };
        case GET_USER_STARTED:
            return {...state, getUserLoading: true };
        case GET_CURRENT_USER_SUCCESS:
            return {...state, getUserLoading: false };
        case GET_USER_FAILED:
            return {...state, getUserLoading: false };
        case LOGIN_USER:
            return {...state, loading: true };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
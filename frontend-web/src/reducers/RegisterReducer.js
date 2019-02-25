import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    EMAIL_CHANGED,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_USER
} from "../actions/RegisterActions";
import {SIGN_OUT} from "../actions/UserActions";

const INITIAL_STATE = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    loading: false,
    error: '',
    successRegister: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            return {...state, username: action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload };
        case CONFIRM_PASSWORD_CHANGED:
            return {...state, confirmPassword: action.payload };
        case EMAIL_CHANGED:
            return {...state, email: action.payload };
        case REGISTER_SUCCESS:
            return {...INITIAL_STATE, successRegister: true};
        case REGISTER_FAIL:
            return {...state, error: action.payload, loading: false };
        case REGISTER_USER:
            return {...state, loading: true };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
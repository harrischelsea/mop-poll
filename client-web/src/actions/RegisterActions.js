import axios from 'axios';
import {setUser} from "./UserActions";

export const USERNAME_CHANGED = "USERNAME_CHANGED";
export const PASSWORD_CHANGED = "PASSWORD_CHANGED";
export const CONFIRM_PASSWORD_CHANGED = "CONFIRM_PASSWORD_CHANGED";
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const REGISTER_USER = "REGISTER_USER";

export const usernameChanged = (username) => {
    return {
        type: USERNAME_CHANGED,
        payload: username
    }
};

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
};

export const confirmPasswordChanged = (confirmPassword) => {
    return {
        type: CONFIRM_PASSWORD_CHANGED,
        payload: confirmPassword
    }
};

export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    }
};

export const registerFail = (dispatch, error) => {
    dispatch( {
        type: REGISTER_FAIL,
        payload: error
    });
};

export const registerSuccess = (dispatch, successRegister) =>{
    dispatch({
        type: REGISTER_SUCCESS,
        payload: successRegister
    });
};

export  const registerUser = ({username, password, confirmPassword, email}) => dispatch => {
    if (password !== confirmPassword) return;
    dispatch({ type: REGISTER_USER });
    axios.post('/users', {username, password, email})
        .then(res => {
            registerSuccess(dispatch, true);
        })
        .catch( () => registerFail(dispatch, 'Invalid register!'));
};
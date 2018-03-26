import axios from "axios";

export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
};
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const signOutUser = () => dispatch => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = '';
    dispatch(signOut());
};

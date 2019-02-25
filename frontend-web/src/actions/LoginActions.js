import axios from 'axios';
import { setUser } from "./UserActions";

export const USERNAME_CHANGED = "USERNAME_CHANGED";
export const PASSWORD_CHANGED = "PASSWORD_CHANGED";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
export const LOGIN_USER = "LOGIN_USER";
export const GET_USER_STARTED = "GET_USER_STARTED";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";

export const usernameChanged = (username) => {
    return {
        type: USERNAME_CHANGED,
        payload: username
    }
};

export const passwordChanged = (password) =>{
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
};

export const loginUserFail = (dispatch, error) => {
    dispatch( {
        type: LOGIN_USER_FAIL,
        payload: error
    });
};

export const loginUserSuccess = (dispatch, user) =>{
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

export const getUserStarted = () =>{
    return {
        type: GET_USER_STARTED
    }
};

export const getUserFailed = () =>{
    return {
        type: GET_USER_FAILED
    }
};

export const getCurrentUserSuccess = () =>{
    return {
        type: GET_CURRENT_USER_SUCCESS
    }
};

export const getUser = () => dispatch => {
    dispatch(getUserStarted());
    axios.get('/users/get-current-user')
        .then(res => {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')?localStorage.getItem('token'): '';
            dispatch(setUser({ username: res.data.username, id: res.data.id, token: res.data.token}));
            localStorage.setItem('token', res.data.token);
            dispatch(getCurrentUserSuccess());

        }).catch(err => {
            console.log('getuser err', err);
        dispatch(getUserFailed());
    })
};

export const getUserAdmin = () => dispatch => {
    dispatch(getUserStarted());
    axios.get('/users/get-current-admin')
        .then(res => {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')?localStorage.getItem('token'): '';
            dispatch(setUser({ username: res.data.username, id: res.data.id, role: res.data.role, token: res.data.token}));
            localStorage.setItem('token', res.data.token);
            dispatch(getCurrentUserSuccess());

        }).catch(err => {
        dispatch(getUserFailed());
    })
};

export  const loginUser = ({username, password}) => dispatch => {
    dispatch({ type: LOGIN_USER });
    console.log('username', username + password)
    axios.post('/users/login', {username, password})
        .then(res => {
            dispatch(setUser({ username: res.data.username, id: res.data.id, token: res.data.token}));
            localStorage.setItem('token', res.data.token);
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')?localStorage.getItem('token'): '';
            loginUserSuccess(dispatch, res.data);
            window.location.replace("/user/");
        })
        .catch( (err) => {
            loginUserFail(dispatch, 'Invalid login!')
        });
};

export  const loginUserAdmin = ({username, password}) => dispatch => {
    console.log("loginUserAdmin");
    dispatch({ type: LOGIN_USER });
    axios.post('/users/login-admin', {username, password})
        .then(res => {
            dispatch(setUser({ username: res.data.username, id: res.data.id, role: res.data.role, token: res.data.token}));
            localStorage.setItem('token', res.data.token);
            console.log('res.data.token', res.data.token);
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')?localStorage.getItem('token'): '';
            loginUserSuccess(dispatch, res.data);
            window.location.replace("/admin/main");
        })
        .catch( () => loginUserFail(dispatch, 'Invalid login!'));
};
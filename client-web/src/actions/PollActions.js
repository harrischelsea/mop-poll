import axios from 'axios';

export const GET_ALL_POLLS_STARTED = "GET_ALL_POLLS_STARTED";
export const GET_ALL_POLLS_SUCCESS = "GET_ALL_POLLS_SUCCESS";
export const GET_ALL_POLLS_FAILED = "GET_ALL_POLLS_FAILED";

export const getAllPollsStarted = () => {
    return ({
        type: GET_ALL_POLLS_STARTED
    });
};

export const getAllPollsSuccess = (polls) => {
    return ({
        type: GET_ALL_POLLS_SUCCESS,
        payload: polls
    });
};

export const getAllPollsFailed = (error) => {
    return ({
        type: GET_ALL_POLLS_FAILED,
        payload: error
    });
};

export  const getAllPolls = () => dispatch => {
    dispatch(getAllPollsStarted());
    axios.get('/users/get-all-polls')
        .then(res => {

            dispatch(getAllPollsSuccess(res.data));
        })
        .catch( () => dispatch(getAllPollsFailed('Something went wrong!')));
};

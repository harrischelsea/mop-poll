import axios from 'axios';
import {
    GET_ALL_POLLS_STARTED,
    GET_ALL_POLLS_SUCCESS,
    GET_ALL_POLLS_FAILED,
    DELETE_POLL,
} from './ActionTypes';
import { Services } from '../services/Services'

const getAllPollsStarted = () => {
    return ({
        type: GET_ALL_POLLS_STARTED
    });
};

const getAllPollsSuccess = (polls) => {
    return ({
        type: GET_ALL_POLLS_SUCCESS,
        payload: polls
    });
};

const getAllPollsFailed = (error) => {
    return ({
        type: GET_ALL_POLLS_FAILED,
        payload: error
    });
};

export  const getAllPolls = () => dispatch => {
    dispatch(getAllPollsStarted());
    axios.get(Services.getAllPolls)
        .then(res => {
            dispatch(getAllPollsSuccess(res.data));
        })
        .catch( () => dispatch(getAllPollsFailed('Something went wrong!')));
};

const removePoll = () => {
    return ({
        type: DELETE_POLL,
    });
};

export const deletePoll = (pollId) => dispatch => {
    console.log('pollId', pollId)
    axios.post(Services.deletePoll, { pollId })
        .then(res => {
            dispatch(removePoll());
            window.location.replace("/admin/main");
        })
        .catch( () => console.log('Something went wrong!'));
};
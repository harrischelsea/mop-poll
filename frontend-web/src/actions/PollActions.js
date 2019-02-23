import axios from 'axios';
import {
    GET_ALL_POLLS_STARTED,
    GET_ALL_POLLS_SUCCESS,
    GET_ALL_POLLS_FAILED
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
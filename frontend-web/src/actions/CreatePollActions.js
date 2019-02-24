import axios from 'axios';
import {
    CREATE_QUESTION,
    DELETE_CREATED_QUESTION,
    SEND_POLL_STARTED,
    SEND_POLL_FAILED,
    SEND_POLL_SUCCESS,
} from './ActionTypes';
import { Services } from '../services/Services';

const setQuestion = (payload) => {
    return ({
        type: CREATE_QUESTION,
        payload
    });
};

const deleteQuestion = (payload) => {
    return ({
        type: DELETE_CREATED_QUESTION,
        payload
    });
};

export const createQuestion = (question) => dispatch => {
    dispatch(setQuestion(question));
};

export const deleteCreatedQuestion = (index) => dispatch => {
    dispatch(deleteQuestion(index));
};

const sendPollsStarted = () => {
    return ({
        type: SEND_POLL_STARTED
    });
};

const sendPollsSuccess = () => {
    return ({
        type: SEND_POLL_SUCCESS,
    });
};

const sendPollsFailed = (error) => {
    return ({
        type: SEND_POLL_FAILED,
        payload: error
    });
};

export const sendPoll = (questions, pollName) => dispatch => {
    dispatch(sendPollsStarted());
    axios.post(Services.sendPoll,  { questions, pollName })
        .then(res => {
            dispatch(sendPollsSuccess());
            window.location.replace("/main");
        })
        .catch( () => dispatch(sendPollsFailed('Something went wrong!')));
};
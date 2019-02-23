import axios from 'axios';
import {
    SET_ANSWER,
    SEND_POLL_ANSWERS_FAILED,
    SEND_POLL_ANSWERS_STARTED,
    SEND_POLL_ANSWERS_SUCCESS
} from './ActionTypes';
import { Services } from '../services/Services';

const setAnswer = (payload) => {
    return ({
        type: SET_ANSWER,
        payload
    });
};

export const selectAnswer = (text, question_id, option_id, type_id, checked, textAnswer) => dispatch => {
    dispatch(setAnswer(
        {text, question_id, option_id, type_id, checked, textAnswer}
    ));
};

const sendPollAnswersStarted = () => {
    return ({
        type: SEND_POLL_ANSWERS_STARTED
    });
};

const sendPollAnswersSuccess = () => {
    return ({
        type: SEND_POLL_ANSWERS_SUCCESS
    });
};

const sendPollAnswersFailed = (error) => {
    return ({
        type: SEND_POLL_ANSWERS_FAILED,
        payload: error
    });
};

export const sendPollAnswers = (options, poll_id) => dispatch => {
    dispatch(sendPollAnswersStarted());
    axios.post(Services.sendPollAnswers, { options, poll_id })
        .then(res => {
            dispatch(sendPollAnswersSuccess());
            window.location.replace("/success");
        })
        .catch( () => dispatch(sendPollAnswersFailed('Something went wrong!')));
};
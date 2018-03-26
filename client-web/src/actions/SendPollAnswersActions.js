import axios from 'axios';

export const SEND_POLL_ANSWERS_STARTED = "SEND_POLL_ANSWERS_STARTED";
export const SEND_POLL_ANSWERS_SUCCESS = "SEND_POLL_ANSWERS_SUCCESS";
export const SEND_POLL_ANSWERS_FAILED = "SEND_POLL_ANSWERS_FAILED";

export const sendPollAnswersStarted = () => {
    return ({
        type: SEND_POLL_ANSWERS_STARTED
    });
};

export const sendPollAnswersSuccess = () => {
    return ({
        type: SEND_POLL_ANSWERS_SUCCESS
    });
};

export const sendPollAnswersFailed = (error) => {
    return ({
        type: SEND_POLL_ANSWERS_FAILED,
        payload: error
    });
};

export const sendPollAnswers = (questions, poll_id) => dispatch => {
    dispatch(sendPollAnswersStarted());

    let options = questions.map( q => q.opcije.find( o => o.selected == true) );

    axios.post('/users/send-poll-results', { options, poll_id })
        .then(res => {
            dispatch(sendPollAnswersSuccess());
        })
        .catch( () => dispatch(sendPollAnswersFailed('Something went wrong!')));
};

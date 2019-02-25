import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import PollReducer from './PollReducer';
import QuestionReducer from './QuestionReducer';
import AnswerReducer from './AnswerReducer';
import CreatePollReducer from './CreatePollReducer'

export default combineReducers({
    user: UserReducer,
    login: LoginReducer,
    polls: PollReducer,
    question: QuestionReducer,
    answer: AnswerReducer,
    createPoll: CreatePollReducer,
    register: RegisterReducer,
});
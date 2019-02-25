import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/LoginActions';
import { getAllQuestions } from '../../actions/QuestionActions';
import { sendPollAnswers } from '../../actions/AnswerActions';
import { QuestionList } from '../../components/questionList/QuestionList';
import { Button } from 'semantic-ui-react';
import Menu from '../../components/menu/Menu';

class Poll extends Component {

    handleAnswers = () => {
        const { answers } = this.props.answer;  
        const { id } = this.props.match.params;
        this.props.sendPollAnswers(answers, id);
    }

    componentDidMount(){
        this.props.getUser();
        this.props.getAllQuestions(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Menu role="user" />
                {
                    this.props.question.loading
                    ?
                    <h1>Loading---</h1>
                    :
                    <div>
                        <QuestionList questions={this.props.question.questions} />
                        <Button
                            positive
                            color='green'
                            fluid size='large'
                            loading={this.props.answer.loading}
                            onClick={this.handleAnswers}
                            >
                            SEND
                        </Button>
                    </div>
                    
                }
            </div>
        );
    }
}

const mapStateToProps = ({ question, user, answer }) => {
    return { question, user, answer };
};
export default connect(mapStateToProps, {getUser, getAllQuestions, sendPollAnswers})(Poll);
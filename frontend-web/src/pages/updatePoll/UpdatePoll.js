import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/LoginActions';
import { getAllQuestions } from '../../actions/QuestionActions';
import { QuestionList } from '../../components/questionList/QuestionList';
import { Button } from 'semantic-ui-react';
import './UpdatePoll.css';

class UpdatePoll extends Component {

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
                update {this.props.match.params.id}
                {
                    this.props.question.loading
                    ?
                    <h1>Loading---</h1>
                    :
                    <div>
                        <QuestionList questions={this.props.question.questions} />
                    </div>
                    
                }
            </div>
        );
    }
}

const mapStateToProps = ({ question, user, answer }) => {
    return { question, user, answer };
};
export default connect(mapStateToProps, {getUser, getAllQuestions})(UpdatePoll);
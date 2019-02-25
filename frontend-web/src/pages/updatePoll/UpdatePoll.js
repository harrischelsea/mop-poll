import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserAdmin } from '../../actions/LoginActions';
import { getAllQuestions, addOption, deleteOption, updateQuestion, deleteQuestion, addQuestion } from '../../actions/QuestionActions';
import { deletePoll } from '../../actions/PollActions';
import { UpdateQuestionList } from '../../components/updateQuestionList/UpdateQuestionList';
import { ModalCreateQuestion } from '../../components/modalCreateQuestion/ModalCreateQuestion';
import './UpdatePoll.css';
import { Button, Icon, Segment } from 'semantic-ui-react';

class UpdatePoll extends Component {

    handleAnswers = () => {
        const { answers } = this.props.answer;  
        const { id } = this.props.match.params;
        this.props.sendPollAnswers(answers, id);
    }

    deletePoll = () => {
        this.props.deletePoll(this.props.match.params.id);
    }

    componentDidMount(){
        this.props.getUserAdmin();
        this.props.getAllQuestions(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Segment className='update'>
                    <div className='title'>Anketa</div>
                    <Button
                        onClick={this.deletePoll}
                        className='add'>
                        <Icon name='delete' />
                        Delete poll
                    </Button>
                    <div style={{float: 'right'}}>
                        <ModalCreateQuestion 
                            pollId={this.props.match.params.id}
                            update={true} 
                            createQuestion={this.props.addQuestion} />
                    </div>
                </Segment>
                {
                    this.props.question.loading
                    ?
                    <h1>Loading---</h1>
                    :
                    <UpdateQuestionList 
                        pollId={this.props.match.params.id}
                        addOption={this.props.addOption}
                        deleteOption={this.props.deleteOption}
                        updateQuestion={this.props.updateQuestion}
                        deleteQuestion={this.props.deleteQuestion}
                        questions={this.props.question.questions} />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ question, user, polls }) => {
    return { question, user, polls };
};
export default connect(
    mapStateToProps,
    {getUserAdmin, getAllQuestions, addOption, deleteOption,
    updateQuestion, deleteQuestion, deletePoll, addQuestion}
    )(UpdatePoll);
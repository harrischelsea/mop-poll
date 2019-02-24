import React, { Component } from 'react';
import { Button, Icon, Input, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getUserAdmin } from '../../actions/LoginActions';
import { createQuestion, deleteCreatedQuestion, sendPoll } from '../../actions/CreatePollActions';
import { ModalCreateQuestion } from '../../components/modalCreateQuestion/ModalCreateQuestion';
import { CreatedQuestionsList } from '../../components/createdQuestionsList/CreatedQuestionsList';

class CreatePoll extends Component {
    constructor(props){
        super(props);
        this.state={
            pollName: ""
        }
    }

    handlePollName = e => {
        this.setState({ pollName: e.target.value })
    }

    sendPoll = () => {
        const { pollName } = this.state;
        if (pollName == "") return;
        console.log('oooooook');
        console.log('this.props.createPoll.createdQuestions', this.props.createPoll.createdQuestions);
        this.props.sendPoll(this.props.createPoll.createdQuestions, pollName);
    }

    componentDidMount(){
        this.props.getUserAdmin();
    }

    render() {
        return (
            <div>
                <h1>create</h1>
                <Input fluid
                    style={{marginBottom: '10px'}}
                    type='text'
                    label='Poll name:'
                    placeholder='Add poll name...'
                    value={this.state.pollName}
                    onChange={this.handlePollName}
                />
                <ModalCreateQuestion createQuestion={this.props.createQuestion} />

                <CreatedQuestionsList
                    deleteCreatedQuestion={this.props.deleteCreatedQuestion}
                    createdQuestions={this.props.createPoll.createdQuestions} />

                <Button
                    style={{position: 'fixed', bottom:'30px', left: '20px'}}
                    positive onClick={this.sendPoll}><Icon name='add' /> 
                    Finish 
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ user, createPoll }) => {
    return { user, createPoll };
};
export default connect(mapStateToProps, {getUserAdmin, createQuestion, deleteCreatedQuestion, sendPoll})(CreatePoll);
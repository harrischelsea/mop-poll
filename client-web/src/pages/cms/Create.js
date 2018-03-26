import React, { Component } from 'react';
import { Modal, Button, Container, Header, Icon, Select, Input, Form, Segment } from 'semantic-ui-react';

import { Redirect } from 'react-router-dom';
import './Cms.css';
import './Update.css';
import axios from "axios/index";
import {getAllPolls} from "../../actions/PollActions";
import {connect} from "react-redux";

class Create extends Component {
    constructor(props){
        super(props);
        this.state={
            success: null,
            pollName: '',
            currentQuestion: {
                name: '',
                selectedType: 1,
                options: [],
            },
            currentOptions: {
                text: ''
            },
            questions: [],
            finished: false,
        }
    }

    handlePollName = e => {
        this.setState({ pollName: e.target.value });
    };

    handleQuestionName = e => {
        let { currentQuestion } = this.state;
        this.setState({ currentQuestion: {...currentQuestion, name: e.target.value} });
    };

    handleSelectedType = e => {
        let { currentQuestion } = this.state;
        if (e.target.value == 4) {
            this.setState({
                currentQuestion: {...currentQuestion, selectedType: e.target.value, options: ['Unesite svoj odgovor']}
            });
        } else {
            this.setState({
                currentQuestion: {...currentQuestion, selectedType: e.target.value, options: []}
            });
        }
    };

    handleOptionInput = e => {
        let { currentOptions } = this.state;
        this.setState({ currentOptions: { text: e.target.value } });
    };

    addOption = () => {
        let { currentQuestion, currentOptions } = this.state;
        if (currentQuestion.selectedType == 1 && currentQuestion.options.length == 2) return;
        this.setState({
            currentQuestion: { ...currentQuestion, options: [...currentQuestion.options, currentOptions.text] },
            currentOptions: { ...currentOptions, text: '' }
        });
    };

    addQuestion = () => {
        let { questions, currentQuestion } = this.state;
        this.setState({
            questions: [...questions, currentQuestion ],
            currentQuestion: { name: '', selectedType: 1, options: []}
        });
    };

    deleteQuestion = (i) => {
        let { questions } = this.state;
        questions.splice(i, 1);
        this.setState({
            questions
        });
    };

    sendPoll = () => {
        let { questions, pollName } = this.state;
        this.props.getAllPolls();
        axios.post('/users/send-poll', { questions, pollName })
            .then(res => {
              this.props.getAllPolls();
                this.setState({
                    success: true,
                    finished: true,
                });
            })
            .catch( () => this.setState({
                                success: false
                            })
            );
    };

    render() {
        if (this.state.finished) { return <Redirect to="/cms/panel/read" /> }
        return (
            <div>
                <Container>
                    <Segment>
                    <Input fluid
                           style={{marginBottom: '10px'}}
                            type='text'
                            label='Poll name:'
                            placeholder='Add poll name...'
                            value={this.state.pollName}
                            onChange={this.handlePollName}
                    />
                    <Modal trigger={<Button fluid>
                                        <Icon name='add square' />
                                        Create new question
                                    </Button>}
                    closeIcon>
                        <Header icon='archive' content='Create new question' />
                        <Modal.Content>
                            <Input
                                fluid
                                label='Question name:'
                                icon='question'
                                type='text'
                                value={this.state.currentQuestion.name}
                                onChange={this.handleQuestionName}
                            />
                            <select value={this.state.currentQuestion.selectedType} onChange={this.handleSelectedType}>
                                <option value={1} >YES/NO</option>
                                <option value={2}>SINGLE CHOICE</option>
                                <option value={3}>MULTIPLE CHOICE</option>
                                <option value={4}>TEXT</option>
                            </select>
                            <br/>

                            {(this.state.currentQuestion.selectedType != 4)
                                ? <div>
                                    <Input
                                        fluid
                                        type='text'
                                        value={this.state.currentOptions.text}
                                        onChange={this.handleOptionInput}
                                    />
                                    <Button fluid onClick={this.addOption}>Add option</Button>
                                </div>
                                : <div>Nema ponuđenog odgovora</div>}
                            <div style={{marginTop: '10px'}}>
                            {this.state.currentQuestion.options.map(e =>
                                <div className='options'>{e}</div>
                            )}
                            </div>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button positive onClick={this.addQuestion}>Dodaj </Button>
                        </Modal.Actions>
                    </Modal>
                    </Segment>

                    {this.state.questions.map( (el, i) =>
                        <Segment key={i} className='update'> <div className='title'> {el.name} </div>
                            {el.options.map( o =>
                                <div className='options'>{o}</div> )}
                            <Button
                                negative
                                onClick={() => this.deleteCurrentQuestion(i)}>
                                Delete Question
                            </Button>
                        </Segment>
                    )}

                </Container>

                <Button
                    style={{position: 'fixed', bottom:'30px', left: '20px'}}
                    positive onClick={this.sendPoll}><Icon name='add' /> Finish </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ user, polls }) => {
    return { user, polls };
};

export default connect(mapStateToProps, {
    getAllPolls
})(Create);


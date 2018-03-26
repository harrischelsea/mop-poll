import React, { Component } from 'react';
import {getUserAdmin} from "../../actions/LoginActions";
import { getAllQuestions, updateQuestion, addNewQuestion, deleteQuestion } from "../../actions/QuestionActions";
import {getAllPolls} from "../../actions/PollActions";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';

import { Form, Modal, Button, Header, Segment, Container, Icon, Input, Dropdown } from 'semantic-ui-react';
import axios from "axios/index";
import './Update.css';

class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false,
            name: '',
            currentQuestion: { opcije: []},
            currentOption: {
                text: '',
            },
            success: null,

            addQuestion: {
                name: '',
                selectedType: 1,
                opcije: [],
            },
            addNewOptions: {
                text: '',
            },
            deletedPoll: null,
        }
    }

    addCurrentQuestion = (i) => {
        let { questions } = this.props.questions;
        this.setState({ currentQuestion: questions[i], modalOpen: true });
    };

    handleUpdateQuestionName = e => {
        let { currentQuestion } = this.state;
        this.setState({ currentQuestion: {...currentQuestion, text: e.target.value} });
    };

    deleteOption = (i) => {
        let { currentQuestion } = this.state;

        axios.post('/users/delete-option', { currentOption: currentQuestion.opcije[i] })
            .then(res => {
                this.props.updateQuestion(currentQuestion);
                currentQuestion.opcije.splice(i, 1);
                this.setState({ currentQuestion: {...currentQuestion, opcije: currentQuestion.opcije} });
            })
            .catch( () => this.setState({
                    success: false
                })
            );
    };

    handleOptionInput = e => {
        let { currentOption } = this.state;
        this.setState({ currentOption: { text: e.target.value } });
    };

    addOption = (i) => {
        let { currentQuestion, currentOption } = this.state;

        axios.post('/users/add-option', { currentOption, poll_id: this.props.match.params.id, currentQuestion })
            .then(res => {
                this.props.getAllQuestions(this.props.match.params.id);
                this.setState({
                    currentQuestion: { ...currentQuestion, opcije: [...currentQuestion.opcije, {text: currentOption.text}] },
                    currentOption: { ...currentOption, text: '' }
                });
            })
            .catch( () => this.setState({
                    success: false
                })
            );
    };

    updateQuestion = () => {
        let { currentQuestion } = this.state;
        axios.post('/users/update-question', { currentQuestion })
            .then(res => {
                this.props.updateQuestion(currentQuestion);
                this.setState({
                    success: true,
                    modalOpen: false
                });
            })
            .catch( () => this.setState({
                    success: false
                })
            );
    };

    handleNewQuestionName = e => {
        let { addQuestion } = this.state;
        this.setState({ addQuestion: {...addQuestion, name: e.target.value} });
    };

    handleSelectedType = e => {
        let { addQuestion } = this.state;
        if (e.target.value == 4) {
            this.setState({ addQuestion: {...addQuestion, selectedType: e.target.value,  opcije: [{ text: 'Unesite svoj odgovor!'}]}
            });
        } else {
            this.setState({ addQuestion: {...addQuestion, selectedType: e.target.value,  opcije: [] }
            });
        }
    };

    handleNewOptionName = e => {
        let { addNewOptions } = this.state;
        this.setState({ addNewOptions: {...addNewOptions, text: e.target.value} });
    };

    addNewOption = () => {
        let { addQuestion, addNewOptions } = this.state;
        this.setState({
            addQuestion: { ...addQuestion, opcije: [...addQuestion.opcije, {text: addNewOptions.text}] },
            addNewOptions: { ...addNewOptions, text: '' }
        });
    };

    addQuestion = () => {
        let { addQuestion } = this.state;
        axios.post('/users/add-question', { addQuestion, poll_id: this.props.match.params.id })
            .then(res => {
                this.props.getAllQuestions(this.props.match.params.id);
                this.setState({
                    success: true,
                    addQuestion: { name: '', selectedType: 1, opcije: []}
                });
            })
            .catch( () => this.setState({
                    success: false
                })
            );
    };

    deleteCurrentQuestion = (i) => {
        let { questions } = this.props.questions;
        axios.post('/users/delete-question', { deleteCurrentQuestion: questions[i], pollId: this.props.match.params.id })
            .then(res => {
                this.props.deleteQuestion(questions[i]);
                this.setState({
                    success: true,
                });
            })
            .catch( () => this.setState({
                    success: false
                })
            );
    };

    deletePoll = () => {
        axios.post('/users/delete-poll', { pollId: this.props.match.params.id })
            .then(res => {
                this.props.getAllPolls();
                this.setState({
                    success: true,
                    deletedPoll: true,
                });
            })
            .catch( () => this.setState({
                    success: false
                })
            );
    };

    componentDidMount(){
        this.props.getAllQuestions(this.props.match.params.id);
        this.props.getAllPolls();
    }

    render() {
        let { currentQuestion } = this.state;
        if (this.state.deletedPoll) { return <Redirect to="/cms/panel/read" /> }
        let currentPoll = this.props.polls.polls.map(e => {
            if (e.id == this.props.match.params.id) return e.name
        });

        let questions = this.props.questions.questions.map( (q, i) =>
            <div>
            <Segment key={i} className='update'> {i+1}) {q.text}
                <Button
                    negative
                    onClick={() => this.deleteCurrentQuestion(i)}>
                    Delete Question
                </Button>
            <Modal trigger={<Button
                                positive
                                onClick={() => this.addCurrentQuestion(i)}>
                                <Icon name='add square' />Update Question
                            </Button>}
                   closeIcon>
                <Header icon='archive' content='Update question' />
                <Modal.Content>
                    <Input
                        label='Question name:'
                        icon='question'
                        placeholder={currentQuestion.text}
                        type='text'
                        fluid
                        name={currentQuestion.text}
                        value={currentQuestion.text}
                        onChange={this.handleUpdateQuestionName}
                    />
                    <br/>
                    {(this.state.currentQuestion.tip != 4)
                        ?
                        <div>
                            <Input
                                fluid
                                type='text'
                                placeholder='Add option...'
                                name={this.state.currentOption.text}
                                value={this.state.currentOption.text}
                                onChange={this.handleOptionInput}
                            />
                            <Button fluid onClick={() => this.addOption(i)}>Add option</Button>
                        </div>
                        :
                        <div>Nema ponuđenog odgovora</div> }
                        <div style={{marginTop: '10px'}}>
                            {this.state.currentQuestion.opcije.map( (o, i) =>
                            (this.state.currentQuestion.tip != 4)
                                ?
                                    <div className='options'>{o.text}
                                        <Button className='delete-button'
                                            onClick={() => this.deleteOption(i)}>
                                            <Icon name='delete' />
                                        </Button>
                                    </div>
                                :
                                <div></div>
                            )}
                        </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={this.updateQuestion}>Dodaj </Button>
                </Modal.Actions>
            </Modal>
            </Segment>
            </div>
        );

        return (
            <div>
                <Container>
                <Segment className='questions-block'>
                    <h3>{currentPoll}</h3>
                    <Button
                        onClick={this.deletePoll}
                        className='add'>
                        <Icon name='delete' />
                        Delete poll
                    </Button>
                <Modal trigger={<Button
                                    className='add'>
                                    <Icon name='add square' />
                                    Add question
                                </Button>}
               closeIcon>
                    <Header icon='archive' content='Create mew question' />
                    <Modal.Content>
                        <Input
                            label='Question name:'
                            icon='question'
                            placeholder='Add question...'
                            type='text'
                            fluid
                            value={this.state.addQuestion.name}
                            onChange={this.handleNewQuestionName}
                        />
                        <select value={this.state.addQuestion.selectedType} onChange={this.handleSelectedType}>
                            <option value={1} >YES/NO</option>
                            <option value={2}>SINGLE CHOICE</option>
                            <option value={3}>MULTIPLE CHOICE</option>
                            <option value={4}>TEXT</option>
                        </select>
                        <br/>

                        {(this.state.addQuestion.selectedType != 4)
                            ? <div>
                                <Form.Group>
                                <Input
                                    fluid
                                    type='text'
                                    placeholder='Add option...'
                                    value={this.state.addNewOptions.text}
                                    onChange={this.handleNewOptionName}
                                />
                                <Button fluid onClick={this.addNewOption}>Add option</Button>
                                </Form.Group>
                            </div>
                            : <div>Nema ponuđenog odgovora</div>}

                        <div style={{marginTop: '10px'}}>
                        {this.state.addQuestion.opcije.map(e =>
                            <div className='options'>{e.text}</div>
                        )}
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button positive onClick={this.addQuestion}>Add question</Button>
                    </Modal.Actions>
                </Modal>


                <br />
                {questions}
                </Segment>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ user, polls, questions }) => {
    return { user, polls, questions };
};

export default connect(mapStateToProps, {
    getUserAdmin, getAllQuestions, updateQuestion, addNewQuestion, deleteQuestion, getAllPolls
})(Update);

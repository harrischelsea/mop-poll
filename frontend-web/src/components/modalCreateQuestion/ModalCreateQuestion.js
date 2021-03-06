import React, { Component } from 'react';
import { Modal, Button, Header, Icon, Input } from 'semantic-ui-react';

export class ModalCreateQuestion extends Component {
    constructor(props){
        super(props);
        this.state={
            currentQuestion: {
                name: '',
                selectedType: 1,
                options: [],
            },
            currentOption: {
                text: ''
            },
        }
    }

    handleSelectedType = e => {
        const { currentQuestion } = this.state;
        this.setState({
            currentQuestion: {
                ...currentQuestion,
                selectedType: e.target.value,
                options: e.target.value == 4 ? ['Unesite svoj odgovor'] : []
            }
        });
    };

    handleQuestionName = e => {
        const { currentQuestion } = this.state;
        this.setState( {currentQuestion: {...currentQuestion, name: e.target.value} })
    }

    handleOptionInput = e => {
        const { currentOption } = this.state;
        this.setState( {currentOption: {text: e.target.value} })
    }

    addOption = () => {
        const { currentOption, currentQuestion } = this.state;
        if (currentOption.text == "") return;
        this.setState({
            currentQuestion: {...currentQuestion, options: [...currentQuestion.options, currentOption.text]},
            currentOption: { text: '' } 
        })
    }

    addQuestion = () => {
        const { currentQuestion, questions } = this.state;
        const { update, pollId } = this.props;
        if (currentQuestion.selectedType != 4 && currentQuestion.options.length < 2) return;

        if (update && update == true) {
            this.props.createQuestion(currentQuestion, pollId);
            return;
        }

        this.props.createQuestion(currentQuestion);
        this.setState({
            currentQuestion: { name: '', selectedType: 1, options: [] },
            currentOption: { text: '' }
        });
    }

    render() {
        return (
            <div>
                <Modal trigger={
                    <Button fluid>
                        <Icon name='add square' />
                        Create new question
                    </Button>
                    }
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

                        {
                            this.state.currentQuestion.selectedType != 4
                            ? 
                            <div>
                                <Input
                                    fluid
                                    type='text'
                                    value={this.state.currentOption.text}
                                    onChange={this.handleOptionInput}
                                />
                                <Button fluid onClick={this.addOption}>Add option</Button>
                            </div>
                            :
                            <div>Nema ponuđenog odgovora</div>
                        }
                        <div style={{marginTop: '10px'}}>
                        {
                            this.state.currentQuestion.options.map((e, i) =>
                            <div key={i} className='options'>{e}</div>
                        )}
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button positive onClick={this.addQuestion}>ADD </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}
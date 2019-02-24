import React, { Component } from 'react';
import { Modal, Button, Header, Icon, Input } from 'semantic-ui-react';

export class ModalUpdateQuestion extends Component {
    constructor(props){
        super(props);
        this.state={
            pollId: this.props.pollId,
            currentQuestion: {
                id: this.props.currentQuestion.id,
                name: this.props.currentQuestion.name,
                selectedType: this.props.currentQuestion.selectedType,
                options: this.props.currentQuestion.options,
            },
            currentOption: {
                text: ''
            },
        }
    }

    handleQuestionName = e => {
        const { currentQuestion } = this.state;
        this.setState( {currentQuestion: {...currentQuestion, name: e.target.value} })
    }

    handleOptionInput = e => {
        const { currentOption } = this.state;
        this.setState( {currentOption: {text: e.target.value} })
    }

    addOption = () => {
        const { currentOption, currentQuestion, pollId } = this.state;
        if (currentOption.text == "") return;
        this.props.addOption(currentOption.text, pollId, currentQuestion.id)
        this.setState({
            currentQuestion: {...currentQuestion, options: [...currentQuestion.options, currentOption]},
            currentOption: { text: '' } 
        })
    }

    removeOption = (index) => {
        const { currentQuestion } = this.state;
        if (currentQuestion.selectedType == 4) return;
        this.props.deleteOption(currentQuestion.options[index].id);
        currentQuestion.options.splice(index, 1);
        this.setState({ currentQuestion: {...currentQuestion, options: currentQuestion.options} });
    }

    updateQuestion = () => {
        const { currentQuestion } = this.state;
        this.props.updateQuestion(currentQuestion.name, currentQuestion.id);
    }

    render() {
        return (
            <div>
                <Modal trigger={
                    <Button fluid>
                        <Icon name='add square' />
                        Update question
                    </Button>
                    }
                closeIcon>
                    <Header icon='archive' content='Update question' />
                    <Modal.Content>
                        <Input
                            fluid
                            label='Question name:'
                            icon='question'
                            type='text'
                            value={this.state.currentQuestion.name}
                            onChange={this.handleQuestionName}
                        />
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
                            this.state.currentQuestion.options && this.state.currentQuestion.options.map((e, i) =>
                            <div key={i} className='options'>
                                {e.text ? e.text : e}
                                <Button className='delete-button'
                                    onClick={() => this.removeOption(i)}>
                                    <Icon name='delete' />
                                </Button>
                            </div>
                        )}
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button positive onClick={this.updateQuestion}>Update</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}
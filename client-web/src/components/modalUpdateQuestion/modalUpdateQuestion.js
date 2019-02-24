import React, { Component } from 'react';
import { Form, Modal, Button, Header, Segment, Container, Icon, Input, Dropdown } from 'semantic-ui-react';

export class ModalUpdateQuestion extends Component {
    render() {
        return (
            <div>
            <Modal trigger={
                <Button
                    positive
                    onClick={() => this.addCurrentQuestion(i)}>
                    <Icon name='add square' />
                    Update Question
                </Button>
                            }
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
            </div>
        );
    }
}
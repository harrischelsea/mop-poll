import React, { Component } from 'react';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
import { ModalUpdateQuestion } from '../../components/modalUpdateQuestion/ModalUpdateQuestion'

export class UpdateQuestionList extends Component {
    render() {
        const { questions } = this.props;
        return (
            <Container>
                <Segment className='poll'>
                    {questions.map( (q, i) =>
                     <Segment key={q.id ? q.id : i} className='update'>
                        <div className='title'>{q.text}</div>
                        <Button
                            negative
                            onClick={() => this.props.deleteQuestion(q.id, q.opcije)}>
                            Delete Question
                        </Button>
                        <div style={{float: 'right'}}>
                            <ModalUpdateQuestion 
                                pollId={this.props.pollId}
                                addOption={this.props.addOption}
                                deleteOption={this.props.deleteOption}
                                updateQuestion={this.props.updateQuestion}
                                currentQuestion={{
                                    id: q.id,
                                    selectedType: q.tip,
                                    name: q.text,
                                    options: q.opcije
                                }} 
                            />
                        </div>
                    </Segment>
                    )}
                </Segment>
            </Container>
        );
    }
}
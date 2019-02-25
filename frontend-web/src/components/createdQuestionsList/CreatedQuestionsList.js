import React, { Component } from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';

export class CreatedQuestionsList extends Component {
    render() {
        const { createdQuestions } = this.props;
        return (
            <Container>
                <Segment className='poll'>
                    {createdQuestions.map( (q, i) =>
                     <Segment key={i} className='update'>
                        <div className='title'>{q.name}</div>
                        <Button
                            negative
                            onClick={() => this.props.deleteCreatedQuestion(i)}>
                            Delete Question
                        </Button>
                    </Segment>
                    )}
                </Segment>
            </Container>
        );
    }
}
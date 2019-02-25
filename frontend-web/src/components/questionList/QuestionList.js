import React, { Component } from 'react';
import {Container, Segment } from 'semantic-ui-react';
import QuestionTypeRadio from '../questionTypes/QuestionTypeRadio';
import QuestionTypeText from '../questionTypes/QuestionTypeText';
import QuestionTypeCheckbox from '../questionTypes/QuestionTypeCheckbox';

export class QuestionList extends Component {
    render() {
        const { questions } = this.props;
        return (
            <Container>
                <Segment className='poll'>
                    {questions.map( (q, i) =>
                         <Segment className='question' key={q.id}> 
                            {i+1}) {q.text}
                            {(q.tip === 1 || q.tip === 2) && <QuestionTypeRadio type="radio" options={q.opcije} selectAnswer={this.props.selectAnswer} />}
                            {(q.tip === 3) &&  <QuestionTypeCheckbox type="checkbox" options={q.opcije} selectAnswer={this.props.selectAnswer}/> }
                            {(q.tip === 4) &&  <QuestionTypeText options={q.opcije} selectAnswer={this.props.selectAnswer}/> }
                        </Segment>
                    )}
                </Segment>
            </Container>
        );
    }
}
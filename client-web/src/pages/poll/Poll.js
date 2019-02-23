import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUser } from '../../actions/LoginActions';
import { getAllQuestions } from "../../actions/QuestionActions";
import { selectAnswer } from "../../actions/QuestionActions";
import { sendPollAnswers } from "../../actions/SendPollAnswersActions";

import Success from '../success/Success';
import './Poll.css';
import Header2 from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Form, Button, Container, Segment, Header, Loader } from 'semantic-ui-react';


class Poll extends Component {

    handleAnswers = () => {
        this.props.sendPollAnswers(this.props.questions.questions, this.props.match.params.id);
    };

    componentDidMount(){
        console.log('poll+id');
        this.props.getUser();
        this.props.getAllQuestions(this.props.match.params.id);
    }

    render() {
        if (this.props.answers.success) { return <Success /> }

        let button = !this.props.questions.loading
            ?  <Button
                positive
                color='white'
                fluid size='large'
                loading={this.props.answers.loading}
                onClick={this.handleAnswers}
                >SEND</Button>
            : <div style={{height:'500px'}}><Loader style={{marginTop: '145px'}} active inline='centered' /></div>

        let questions = this.props.questions.questions.map( (q, i) =>
            <Segment className='question' key={i}> {i+1}) {q.text}
                {(q.tip == 1 || q.tip == 2) &&  <QuestionTypeRadio question={q.opcije} selectAnswer={this.props.selectAnswer}/> }
                {(q.tip == 3) &&  <QuestionTypeCheckbox question={q.opcije} selectAnswer={this.props.selectAnswer}/> }
                {(q.tip == 4) &&  <QuestionTypeText question={q.opcije} selectAnswer={this.props.selectAnswer}/> }
            </Segment>
        );

        return (
            <div>
                <Header2 user={this.props.user.username}/>
                <Container>
                    <Segment className='questions-group'>
                        { questions }
                        { button }
                    </Segment>
                </Container>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = ({ questions, user, answers }) => {
    return { questions, user, answers };
};
export default connect(mapStateToProps, {getAllQuestions, getUser, selectAnswer, sendPollAnswers })(Poll);

const QuestionTypeRadio = ({ question, selectAnswer }) => (
    <Form>
        <Form.Group grouped>
            { question.map( el =>
                <h3>
                    <Form.Field label={el.text}
                                control='input'
                                type='radio'
                                checked={el.selected}
                                onChange={() => {console.log(el); selectAnswer(el.pitanje, el.id, 1)}}
                                name={el.text} />
                </h3> )}
        </Form.Group>
    </Form>
);

const QuestionTypeCheckbox = ({ question, selectAnswer }) => (
    <Form>
        <Form.Group grouped>
            { question.map( el =>
                <h3>
                    <Form.Field label={el.text}
                                control='input'
                                type='checkbox'
                                checked={el.selected}
                                onChange={() => {console.log(el); selectAnswer(el.pitanje, el.id, 3, el.selected)}}
                                name={el.text} />
                </h3> )}
        </Form.Group>
    </Form>
);

const QuestionTypeText = ({ question, selectAnswer }) => (
    <Form>
        <Form.Group grouped>
            { question.map( el =>
                <h3>
                    <Form.Field
                                control='textarea'
                                onChange={(e) => {console.log(el); selectAnswer(el.pitanje, el.id, 4, true, e.target.value )}}
                                name={el.text} />
                </h3> )}
        </Form.Group>
    </Form>
);

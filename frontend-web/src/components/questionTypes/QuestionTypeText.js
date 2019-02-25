import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions/AnswerActions';

class QuestionTypeText extends Component {
    render() {
        const { options, selectAnswer } = this.props;
        return (
            <Form>
                <Form.Group grouped>
                    { options.map( el =>
                        <h3 key={el.id}>
                            <Form.Field
                                        control='textarea'
                                        onChange={(e) => {this.props.selectAnswer(el.text, el.pitanje, el.id, 4, true, e.target.value )}}
                                        name={el.text} />
                        </h3> )}
                </Form.Group>
            </Form>
        );
    }
}

const mapStateToProps = ({ answer }) => ({ answer });
export default connect(mapStateToProps, {selectAnswer})(QuestionTypeText);
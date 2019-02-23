import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions/AnswerActions';

class QuestionTypeRadio extends Component {
    constructor(props){
        super(props);
        this.state={
            options: this.props.options,
        }
    }

    handleSelected = (index) => {
        const { options } = this.state;
        let newOptions = options.map((el, i) => {
            if (i == index) {
                console.log(el)
                return ({...el, selected: !el.selected})
            } else {
                return ({...el, selected: false})
            }
        })

        this.setState({
            options: newOptions
        })
    }

    render() {
        const { type } = this.props;
        return (
            <Form>
                <Form.Group grouped>
                    { this.state.options.map( (el, i) => 
                        <Form.Field 
                            label={el.text}
                            control='input'
                            type={type}
                            checked={el.selected}
                            onChange={() => {
                                this.handleSelected(i);
                                this.props.selectAnswer(el.text, el.pitanje, el.id, 1);
                            }}
                            name={el.text} />
                        )}
                </Form.Group>
            </Form>
        );
    }
}

const mapStateToProps = ({ answer }) => ({ answer });
export default connect(mapStateToProps, {selectAnswer})(QuestionTypeRadio);
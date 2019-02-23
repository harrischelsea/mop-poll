import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import QuestionTypeItem from './QuestionTypeItem';

class QuestionTypeCheckbox extends Component {
    render() {
        const { options, type } = this.props;
        return (
            <Form>
                <Form.Group grouped>
                    { options.map( el => <QuestionTypeItem type={type} item={el} /> )}
                </Form.Group>
            </Form>
        );
    }
}

const mapStateToProps = ({ answer }) => ({ answer });
export default connect(mapStateToProps, {})(QuestionTypeCheckbox);
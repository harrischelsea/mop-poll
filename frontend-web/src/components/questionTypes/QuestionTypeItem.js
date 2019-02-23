import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions/AnswerActions';

class QuestionTypeItem extends Component {
    constructor(props){
        super(props);
        this.state={
            selected: false
        }
    }

    handleSelected = () => {
        const { selected } = this.state;
        this.setState({selected: !selected});
    }

    render() {
        const { item, type } = this.props;
        const { selected }= this.state;
        return (
            <h3>
                <Form.Field 
                    label={item.text}
                    control='input'
                    type={type}
                    checked={selected}
                    onChange={() => {
                        this.handleSelected();
                        this.props.selectAnswer(item.text, item.pitanje, item.id, 3);
                    }}
                    name={item.text} />
            </h3>
        );
    }
}

const mapStateToProps = ({ answer }) => ({ answer });
export default connect(mapStateToProps, {selectAnswer})(QuestionTypeItem);
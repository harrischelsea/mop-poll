import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserAdmin } from '../../actions/LoginActions';
import { getAllPolls } from '../../actions/PollActions';
import { ModalCreateQuestion } from '../../components/modalCreateQuestion/ModalCreateQuestion';

class CreatePoll extends Component {

    componentDidMount(){
        this.props.getUserAdmin();
        this.props.getAllPolls();
    }

    render() {
        return (
            <div>
                <h1>create</h1>
                <ModalCreateQuestion />
            </div>
        );
    }
}

const mapStateToProps = ({ user, polls }) => {
    return { user, polls };
};
export default connect(mapStateToProps, {getUserAdmin, getAllPolls})(CreatePoll);

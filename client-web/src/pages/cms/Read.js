import React, { Component } from 'react';
import {getUserAdmin} from "../../actions/LoginActions";
import {connect} from "react-redux";

import PollOutput from '../../components/pollOutput/PollOutput';

class Read extends Component {
    render() {
        return (
            <div>
                <PollOutput polls={this.props.polls.polls} link='/cms/panel/read/'/>
            </div>
        );
    }
}

const mapStateToProps = ({ user, polls }) => {
    const { role, id } = user;
    return { role, id, polls };
};

export default connect(mapStateToProps, {
    getUserAdmin
})(Read);

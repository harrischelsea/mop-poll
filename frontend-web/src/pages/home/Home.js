import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../actions/LoginActions';
import { getAllPolls } from '../../actions/PollActions';
import { PollList } from '../../components/pollList/PollList';
import Menu from '../../components/menu/Menu';

class Home extends Component {

    componentDidMount(){
        this.props.getUser();
        this.props.getAllPolls();
    }

    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to="/login" />
        }
        return (
            <div>
                <Menu role="user" />
                {
                    this.props.polls.loading || this.props.user.loading
                    ?
                    <h1>Loading---</h1>
                    :
                    <PollList link={"poll/"} polls={this.props.polls.polls} />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ user, polls }) => {
    return { user, polls };
};
export default connect(mapStateToProps, {getUser, getAllPolls})(Home);
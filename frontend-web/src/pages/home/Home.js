import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../actions/LoginActions';
import { getAllPolls } from '../../actions/PollActions';
import { PollList } from '../../components/pollList/PollList';
// import './Home.css';

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
                <h1>home</h1>
                {
                    this.props.polls.loading
                    ?
                    <h1>Loading---</h1>
                    :
                    <PollList polls={this.props.polls.polls} />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ user, polls }) => {
    return { user, polls };
};
export default connect(mapStateToProps, {getUser, getAllPolls})(Home);

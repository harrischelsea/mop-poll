import React, { Component } from 'react';
import { getUser } from '../../actions/LoginActions';
import { getAllPolls } from '../../actions/PollActions';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Loader } from 'semantic-ui-react';

import './Home.css';

import PollOutput from '../../components/pollOutput/PollOutput';
class Home extends Component {

    componentDidMount(){
        this.props.getUser();
        this.props.getAllPolls();
    }

    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to="/login" />
        }
        if (this.props.polls.loading) <div><Loader inverted content='Loading' /></div>;
        return (
            <div>
                <Header user={this.props.user.username}/>
               <PollOutput polls={this.props.polls.polls} link='/poll/'/>
            </div>
        );
    }
}

const mapStateToProps = ({ user, polls }) => {
    return { user, polls };
};
export default connect(mapStateToProps, {getUser, getAllPolls})(Home);

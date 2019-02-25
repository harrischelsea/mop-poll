import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserAdmin } from '../../actions/LoginActions';
import { getAllPolls } from '../../actions/PollActions';
import { PollList } from '../../components/pollList/PollList';
// import './Home.css';

class Main extends Component {

    componentDidMount(){
        console.log('test');
        this.props.getUserAdmin();
        this.props.getAllPolls();
    }

    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to="/login" />
        }
        return (
            <div>
                {
                    this.props.polls.loading
                    ?
                    <h1>Loading---</h1>
                    :
                    <PollList link={"/admin/update/"} polls={this.props.polls.polls} />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ user, polls }) => {
    return { user, polls };
};
export default connect(mapStateToProps, {getUserAdmin, getAllPolls})(Main);

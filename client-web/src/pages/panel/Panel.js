import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { getUserAdmin } from '../../actions/LoginActions';
import { getAllPolls } from '../../actions/PollActions';
import { signOutUser } from "../../actions/UserActions";

import {connect} from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Read from '../cms/Read';
import Create from '../cms/Create';
import Update from '../cms/Update';

import './Panel.css';
import { Menu, Container } from 'semantic-ui-react';

class Panel extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: 'read'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    componentDidMount(){
        this.props.getUserAdmin();
        this.props.getAllPolls();
    }

    render() {
        const { activeItem } = this.state;
        if (this.props.login.getUserLoading) { return <div>Loading...</div>}
        if ( !this.props.role ) { return <div>greska</div>}
        return (
            <BrowserRouter>
            <div>

                <Menu inverted pointing secondary className="navbar-main-menu" stackable fluid>
                    <Container>
                    <Menu.Item name='read' as={NavLink} to='/cms/panel/read' active={activeItem === 'read'} onClick={this.handleItemClick} />
                    <Menu.Item name='create' as={NavLink} to='/cms/panel/create' active={activeItem === 'create'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                            <Menu.Item name={'Welcome, ' + this.props.username}  />
                        <a style={{
                            textDecoration: 'none',
                            padding: '10px',
                            color: 'white',
                        }} href='/login'>Log out</a>
                    </Menu.Menu>
                    </Container>
                </Menu>

                    <Route exact path="/cms/panel/read" component={Read} />
                    <Route path="/cms/panel/read/:id" component={Update} />
                    <Route path="/cms/panel/create" component={Create} />

            </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({ user, polls, login }) => {
    const { role, id, username, signOut } = user;
    return { role, id, username, signOut, polls, login };
};

export default connect(mapStateToProps, {
    getUserAdmin, getAllPolls, signOutUser
})(Panel);


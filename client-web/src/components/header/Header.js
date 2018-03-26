import React, { Component } from 'react';

import {Container, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
                <Segment className='header'>
                    <Container>
                        <span>Welcome, {this.props.user}! | MOP - Questionnaire</span>

                        <Link className='link' to="/">View all!</Link>
                        <Link className='link' to="/login">Log out</Link>
                    </Container>
                </Segment>
        );
    }
}

export default Header;

import React, { Component } from 'react';
import {Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Success extends Component {

    render() {
        return (
            <div style={{marginTop: '150px'}} align="center">
                <Container>
                    <Segment>
                    Uspješno ste uradili Anketu! <br/>
                    <Link to="/">Vratite se na početnu stranicu.</Link>
                    </Segment>
                </Container>
            </div>
        );
    }
}

export default Success;
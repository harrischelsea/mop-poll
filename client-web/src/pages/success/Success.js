import React, { Component } from 'react';
import {Container, Segment } from 'semantic-ui-react';

class Success extends Component {

    render() {
        return (
            <div style={{marginTop: '150px'}} align="center">
                <Container>
                    <Segment>
                    Uspješno ste uradili Anketu! <br/>
                    <a href='/'>Vratite se na početnu stranicu.</a>
                    </Segment>
                </Container>
            </div>
        );
    }
}

export default Success;
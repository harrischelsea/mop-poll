import React, { Component } from 'react';

import {Container, Segment } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (

            <Segment className='footer'>
                <Container>
                    MOP-Questionnaire
                </Container>
            </Segment>
        );
    }
}

export default Footer;

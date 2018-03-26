import React, { Component } from 'react';

import {Container, Segment, Header } from 'semantic-ui-react';

class PollOutput extends Component {
    render() {
        return (
            <Container>
                <Segment className='poll'>
                    {this.props.polls.map( p =>
                        <a href={this.props.link + p.id} key={p.id}>
                            <Header as='h3' className='title'>{p.name}</Header>
                        </a>
                    )}
                </Segment>
            </Container>
        );
    }
}

export default PollOutput;

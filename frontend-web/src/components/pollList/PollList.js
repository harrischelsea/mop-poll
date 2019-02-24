import React, { Component } from 'react';
import {Container, Segment, Header } from 'semantic-ui-react';

export class PollList extends Component {
    render() {
        const { polls, link } = this.props;
        return (
            <Container>
                <Segment className='poll'>
                    {polls.map( p =>
                        <a key={p.id} href={link + p.id}>
                            <Header as='h3' className='title'>{p.name}</Header>
                        </a>
                    )}
                </Segment>
            </Container>
        );
    }
}
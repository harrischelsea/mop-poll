import React, { Component } from 'react';
import {Container, Segment, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export class PollList extends Component {
    render() {
        const { polls, link } = this.props;
        return (
            <Container>
                <Segment className='poll'>
                    {polls.map( (p, i) =>
                        <Link key={p.id} to={link + p.id}>
                            <Header as='h2' className='title'>{i + 1}) {p.name}</Header>
                        </Link>
                    )}
                </Segment>
            </Container>
        );
    }
}
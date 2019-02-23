import React, { Component } from 'react';
import {Container, Segment, Header } from 'semantic-ui-react';

export class PollList extends Component {
    componentDidMount(){
        console.log(this.props.polls)
    }
    render() {
        const { polls } = this.props;
        return (
            <Container>
                <Segment className='poll'>
                    {polls.map( p =>
                        <a key={p.id} href={'/poll/' + p.id}>
                            <Header as='h3' className='title'>{p.name}</Header>
                        </a>
                    )}
                </Segment>
            </Container>
        );
    }
}
import React, { Component } from 'react';

class Failed extends Component {

    render() {
        return (
            <div>
                Došlo je do greške!
                <a href='/'>Vratite se na početnu stranicu.</a>
            </div>
        );
    }
}

export default Failed;
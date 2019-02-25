import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Poll from '../pages/poll/Poll';
import Success from '../pages/success/Success';

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/user/" component={Home} />
                <Route path="/user/poll/:id" component={Poll} />
                <Route path="/user/success" component={Success} />
            </Switch>
        );
    }
}

export default MainRouter;
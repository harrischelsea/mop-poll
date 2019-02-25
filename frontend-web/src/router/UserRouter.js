import React, { Component } from 'react';
import MainRouter from './MainRouter';
import Menu from '../components/menu/Menu';

import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Poll from '../pages/poll/Poll';
import Success from '../pages/success/Success';

class UserRouter extends Component {
    render() {
        return (
            <div>
                <Menu role={"user"} />
                {/* <MainRouter /> */}
                <Route path="/" component={Home} />
                <Route path="/poll/:id" component={Poll} />
                <Route path="/success" component={Success} />
            </div>
        );
    }
}

export default UserRouter;
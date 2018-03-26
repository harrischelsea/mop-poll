import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import LoginAdmin from '../pages/loginAdmin/LoginAdmin';
import Register from '../pages/register/Register';
import Poll from '../pages/poll/Poll';

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/poll/:id" component={Poll} />
            </Switch>
        );
    }
}


export default MainRouter;

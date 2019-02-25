import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login/Login';
import LoginAdmin from '../pages/loginAdmin/LoginAdmin';
import Register from '../pages/register/Register';
import AdminRouter from './AdminRouter';
import Home from '../pages/home/Home';
import Poll from '../pages/poll/Poll';
import Success from '../pages/success/Success';

class LoginRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cms" component={LoginAdmin} />
                <Route path="/register" component={Register} />

                <Route exact path="/" component={Home} />
                <Route path="/poll/:id" component={Poll} />
                <Route path="/success" component={Success} />

                <Route path="/admin/" component={AdminRouter} />
            </Switch>
        );
    }
}

export default LoginRouter;
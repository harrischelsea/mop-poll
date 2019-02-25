import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login/Login';
import LoginAdmin from '../pages/loginAdmin/LoginAdmin';
import Register from '../pages/register/Register';
import UserRouter from './UserRouter';
import AdminRouter from './AdminRouter';

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/user/" component={UserRouter} />
                <Route exact path="/cms" component={LoginAdmin} />
                <Route path="/admin/" component={AdminRouter} />
            </Switch>
        );
    }
}

export default MainRouter;
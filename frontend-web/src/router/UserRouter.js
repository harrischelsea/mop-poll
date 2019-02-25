import React, { Component } from 'react';
import MainRouter from './MainRouter';
import Menu from '../components/menu/Menu';

class UserRouter extends Component {
    render() {
        return (
            <div>
                <Menu role={"user"} />
                <MainRouter />
            </div>
        );
    }
}

export default UserRouter;
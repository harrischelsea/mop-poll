import React, { Component } from 'react';
import CmsRouter from './CmsRouter';
import Menu from '../components/menu/Menu';

class AdminRouter extends Component {
    render() {
        return (
            <div>
                <Menu role={"admin"} />
                <CmsRouter />
            </div>
        );
    }
}

export default AdminRouter;
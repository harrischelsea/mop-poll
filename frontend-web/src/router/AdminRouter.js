import React, { Component } from 'react';
import CmsRouter from './CmsRouter';
import Menu from '../components/menu/Menu';

import UpdatePoll from '../pages/updatePoll/UpdatePoll';
import Main from '../pages/main/Main';
import CreatePoll from '../pages/createPoll/CreatePoll';
import { Route } from 'react-router-dom';

class AdminRouter extends Component {
    render() {
        return (
            <div>
                <Menu role={"admin"} />
                <Route path="/admin/main" component={Main} />
                <Route path="/admin/update/:id" component={UpdatePoll} />
                <Route path="/admin/create/" component={CreatePoll} />
            </div>
        );
    }
}

export default AdminRouter;
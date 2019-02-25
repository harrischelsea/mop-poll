import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UpdatePoll from '../pages/updatePoll/UpdatePoll';
import Main from '../pages/main/Main';
import CreatePoll from '../pages/createPoll/CreatePoll';

class CmsRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/admin/main" component={Main} />
                <Route path="/admin/update/:id" component={UpdatePoll} />
                <Route path="/admin/create/" component={CreatePoll} />
            </Switch>
        );
    }
}

export default CmsRouter;
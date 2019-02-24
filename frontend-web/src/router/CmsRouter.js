import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginAdmin from '../pages/loginAdmin/LoginAdmin';
import UpdatePoll from '../pages/updatePoll/UpdatePoll';
import Main from '../pages/main/Main';
import CreatePoll from '../pages/createPoll/CreatePoll';

class CmsRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/cms" component={LoginAdmin} />
                <Route exact path="/main" component={Main} />
                <Route path="/update/:id" component={UpdatePoll} />
                <Route path="/create/" component={CreatePoll} />
            </Switch>
        );
    }
}

export default CmsRouter;
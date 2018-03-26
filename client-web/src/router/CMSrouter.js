import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginAdmin from '../pages/loginAdmin/LoginAdmin';
import Panel from '../pages/panel/Panel';


class CMSrouter extends Component {
    render() {
        return (
            <Switch>
            <Route exact path="/cms" component={LoginAdmin} />
            <Route path="/cms/panel" component={Panel} />
            </Switch>
        );
    }
}


export default CMSrouter;

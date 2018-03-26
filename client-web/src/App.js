import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import MainRouter from './router/MainRouter';
import CMSrouter from './router/CMSrouter';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

import './App.css';
import {Container, Segment } from 'semantic-ui-react';

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div style={{background: '#f2f2f2'}}>
                    <MainRouter/>
                    <CMSrouter/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

//axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')?localStorage.getItem('token'): '';
export default App;

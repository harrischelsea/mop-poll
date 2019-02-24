import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import MainRouter from './router/MainRouter';
import './App.css';
import CmsRouter from './router/CmsRouter';

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <MainRouter />
                        <CmsRouter />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')?localStorage.getItem('token'): '';
export default App;

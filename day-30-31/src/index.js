import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import './styles/maic.scss'
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

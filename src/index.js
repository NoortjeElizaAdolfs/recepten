import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import './styles/Forms.css';
import App from './App';

import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";

ReactDom.render(
    <React.StrictMode>
        <Router>
        <AuthContextProvider>
            <App/>
        </AuthContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

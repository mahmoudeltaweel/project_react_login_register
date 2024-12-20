import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import './././pages/Dashboard/dashboard.css';
import './all.min.css';
import { BrowserRouter } from 'react-router';
import UserProvider from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <UserProvider>
    <App /> 
    </UserProvider>
    </BrowserRouter>   
);



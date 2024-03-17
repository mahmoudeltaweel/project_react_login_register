import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import './all.min.css';
import './pages/Dashboard/dashboard.css';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <App />    
    </Router>
);



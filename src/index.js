import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { AuthProvider } from './context/auth-context';
import { StatisticsProvider } from './context/statistics-context';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <StatisticsProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    </StatisticsProvider>
  </Router>
, document.getElementById('root'));

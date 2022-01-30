import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';

ReactDOM.render(
  <React.StrictMode>
    <Layout/>
    {/* <Login/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

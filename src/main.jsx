import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Import komponen utama aplikasi Anda
import './index.css'; // Import file CSS global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App /> {/* Merender komponen utama aplikasi */}
  </Router>
);

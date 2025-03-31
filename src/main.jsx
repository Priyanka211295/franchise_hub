import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

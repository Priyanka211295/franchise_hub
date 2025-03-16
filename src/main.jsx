import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';
import Applications from './components/axioss/Applications.jsx';
import Details from './components/routing/details/Details.jsx';
import Big from './components/axioss/Big.jsx';
import Small from './components/axioss/Small.jsx';
import Today from './components/routing/today/Today.jsx';

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    {/* <Applications></Applications> */}
  </StrictMode>
);

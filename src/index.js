import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/style.css"
import App from './App';
import '../node_modules/react-modern-drawer/dist/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


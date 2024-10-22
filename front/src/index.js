import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Assurez-vous que le chemin est correct
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si vous utilisez reportWebVitals, vous pouvez laisser ceci ou le supprimer si non nécessaire
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/css/index.css';
import './assets/css/scrollbars.css';
import './assets/css/gallery.css';
import './assets/css/filter.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
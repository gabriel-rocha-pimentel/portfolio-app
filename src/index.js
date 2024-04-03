//React config
import React from 'react';
import ReactDOM from 'react-dom/client';

//Styles
import './styles/index.css';

//Pages
import Home from './pages/Home.js';
import About from './pages/About.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
    <About />
  </React.StrictMode>
);

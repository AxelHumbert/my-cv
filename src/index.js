import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();

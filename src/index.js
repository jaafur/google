import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

import ResultsContextProvider from './components/ResultsContextProvider';
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <ResultsContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ResultsContextProvider>,
  
);

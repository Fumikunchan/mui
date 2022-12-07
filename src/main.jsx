import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import ComboBox from './components/greeting/autocomplete';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComboBox />
  </React.StrictMode>
);

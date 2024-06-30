import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {onCLS, onINP, onFCP, onLCP, onTTFB} from 'web-vitals';


import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

onCLS(console.log);
onINP(console.log);
onFCP(console.log);
onLCP(console.log);
onTTFB(console.log);

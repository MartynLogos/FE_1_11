import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // React.createElement('button', { disabled: false, onClick: () => console.log(1) }, 'Click Me')
);

import React from 'react'
import ReactDOM from 'react-dom/client' // For React 18+
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/context.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


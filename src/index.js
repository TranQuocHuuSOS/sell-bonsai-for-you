import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/Account/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// // index.js (or your app's entry point)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from './components/Account/AuthContext';

// import App from './App'; // Your main application component

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

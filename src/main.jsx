import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import { CartProvider } from './context/CartContext';
import { JobProvider } from './context/JobContext';
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CartProvider>
          <JobProvider>
            <App />
          </JobProvider>
        </CartProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
)

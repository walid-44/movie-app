import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/sweetalert2/dist/sweetalert2.min.css";
import { Provider } from 'react-redux'
import { store } from './rtk/store.js'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

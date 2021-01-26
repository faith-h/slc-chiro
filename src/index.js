import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <App />
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

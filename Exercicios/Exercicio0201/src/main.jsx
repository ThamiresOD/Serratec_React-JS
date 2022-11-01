import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Bio from './components/Bio'
import Agua from './components/Element'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Agua/>
    <Bio/>
  </React.StrictMode>
)

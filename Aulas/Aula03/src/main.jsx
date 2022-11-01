import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Login from '../src/assets/components/Login/index.jsx'
import VerificarIdade from './assets/components/VerificarIdade'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    <VerificarIdade/>
  </React.StrictMode>
)

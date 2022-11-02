import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)


// Atividade Proposta:

// Criar um objeto com id, nome e email
// passar via state pro contato 2
// puxar o id do contato que foi criado dentro do to
// recuperar a informação com useLocation
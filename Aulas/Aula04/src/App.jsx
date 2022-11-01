import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route} from "react-router-dom"
import { Galeria } from './pages/Galeria'
import Home from './pages/Home'
import Contatos from './pages/Contatos'
import ContatoDetalhes from './pages/ContatoDetalhes'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/galeria" element={<Galeria/>}/>
      <Route path="/contatos" element={<Contatos/>}/>
      <Route path="/contatos/:id" element={<ContatoDetalhes/>}/>
      <Route path="*" element={<h1>Erro 404 - Página não encontrada</h1>}/>
    </Routes>
  )
}

export default App

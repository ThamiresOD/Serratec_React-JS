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



/*

Atividade Proposta:

-> Requisitos:
- Um botão para marcar o copo de água bebido.
- Um botão para resetar a contagem
- Um input para setar quantos ml tem o copo;
- O Total de água ingerida deve atualizar automaticamente quando clicar no botão de copo de água bebido.

-> Pontos adicionais
- Opção para definir uma meta de ingestão diária de água e mostrar uma mensagem quando a pessoa conseguir atingir.
- Diário da água: Exibir histórico com a data e hora que a pessoa bebeu(clicou no botão).

*/
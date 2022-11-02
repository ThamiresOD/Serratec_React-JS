import React from 'react'
import ReactDOM from 'react-dom/client'
import Agua from './components/Agua'
import Goal from './components/Goal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Agua/>
    {/* <Goal/> */}
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
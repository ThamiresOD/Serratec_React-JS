import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contato from './components/Contato'
import Atleta from './components/Atleta'
function App() {

  // const nomes = [
  //   { id: 1, nome: "Romin", esporte: ["Natacao", "Downhill"] },
  //   { id: 2, nome: "Thamires" },
  //   { id: 3, nome: "Cinthia" }
  // ]

  // console.log(nomes)
  // console.log(nomes[0])
  // console.log(nomes.length)
  
  // console.log(nomes[0].nome)
  // console.log(nomes[0].esporte[1])
  
  // const novoArray = nomes.forEach((nome, index) => {
  //   if (index > 1) return
  //   console.log(index)
  //   console.log(nome)
  //   return nome
  // })

  // const renderizaNomes = () => {
    //   {nomes.map((item, index) => {
      //     return <h1 key={index} > {item}</h1>
      //   })}
      // }
      

      // Atividade Proposta 01: 

      // const contatos = [
      //   { id: 1, nome: "Romin", email: "r@gmail.com"},
      //   { id: 2, nome: "Thamires", email: "t@gmail.com"},
      //   { id: 3, nome: "Cinthia", email: "c@gmail.com"}
      // ]
      
      //Atividade Proposta 02:

      const atletas = [
        { id: 1, nome: "Romin", esporte: ["Natação", "DownHill"]},
        { id: 2, nome: "Thamires", esporte: ["Jiu-Jitsu", "DownHill"]},
        { id: 3, nome: "Cami Balanche", esporte: ["Downhill", "Hockey"]}
      ]


      return (
        <>
      <h1>Trabalhando com Arrays e Objetos</h1>

      {/* <>{renderizaNomes()}</> */}
      <>
      {/* {contatos.map((item) => {
        return <Contato contato={item} key={item.id}/>
      })} */}
      {/* <Contato contato={contatos[0]}/> */}
      {atletas.map((item) => {
        return <Atleta atleta={item} key={item.id}/>
      })}

      </>
    </>
  )
}

export default App

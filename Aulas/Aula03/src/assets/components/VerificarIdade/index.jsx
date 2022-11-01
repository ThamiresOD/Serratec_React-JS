import { useState } from 'react'
import './style.css'

function VerificarIdade() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState()

    let print = ""
    let menssage = ""
    let show = ""

    if (!nome == "") {
        menssage = (<h6>Olá {nome}!</h6>)
        if (!idade == 0) {
            if (idade >= 18) {
                print = "maior"
            } else {
                print = "menor"
                
            }
            menssage = (<h6>Olá {nome}, você é {print} de idade.</h6>)
        }
    }
    
    let secret = false
    const on = () => {
        secret = true
    }

    // const secretMenssage = () => {
    //     <h6> Pode pegar seu caneco 🍻 </h6>
    // }

    return (
        <>
            <h1>Cadastro</h1>
            <div>
                <label>Digite seu nome: </label>
                <input
                    type="text"
                    placeholder='digite seu nome'
                    value={nome}
                    onChange={e => setNome(e.target.value)} />
            </div>
            <div>
                <label>Digite sua idade: </label>
                <input
                    type="number"
                    placeholder='digite sua idade'
                    value={idade}
                    onChange={e => setIdade(e.target.value)} />
            </div>
            <h1>{menssage}</h1>
            <div>
                <button onClick={on}> Show secret menssage </button>
                {/* <h3>{secretMessage}</h3> */}
            </div>
        </>
    )
}
export default VerificarIdade


// Atividade solicitada:

//Criar um novo componente e importar main.jsx
//Criar um input para salvar o nome da pessoa
//Criar um input para salvar a idade da pessoa
//Criar um botão para executar uma função
//A Função deve verificar se a idade da pessoa é menor que 18 anos ou maior
//Mostrar na tela: "Olá fulano, você é menor/ou maior de idade";

// Concluida!
import { useState } from 'react'
import './style.css'

function VerificarIdade() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [secret, setSecret] = useState("")

    let print = ""
    let message = ""
    let show = ""

    if (!nome == "") {
        message = (<h6>Olá {nome}!</h6>)
        if (!idade == 0) {
            if (idade >= 18) {
                print = "maior"
                show = (<h6> Pode pegar seu caneco 🍻 </h6>)
            } else {
                print = "menor"
                show = (<h6> Vai arrumar sua cama! 👼</h6>)
            }
            message = (<h6>Olá {nome}, você é {print} de idade.</h6>)
        }
    }


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
            <h1>{message}</h1>
            <div>
                <button onClick={show}> Show secret menssage </button>
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
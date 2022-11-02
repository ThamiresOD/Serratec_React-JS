import { Link } from "react-router-dom"

const Contatos = () => {

    const contato = {
        id: 1,
        nome: "Joao Felipe",
        email: "jogao@serratec.com",
    }

    const contato01 = {
        id: 2,
        nome: "Thata",
        email: "thatas2@gmail.com"
    }

    return (
        <>
            <h1>Contatos 📞</h1>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/Galeria'>Galeria</Link></li>
            </ul>

            <ol>
                <li><Link to={`/contatos/${contato.id}`} state={{ nome: contato.nome, id: contato.id }}>Contatos</Link></li>
                <li><Link to={`/contatos/${contato01.id}`} state={{ nome: contato01.nome, id: contato01.id }}>Contatos01</Link></li>
                {/* <li><Link to='./2'>Contato 02</Link></li>
                <li><Link to='./3'>Contato 03</Link></li> */}
            </ol>
        </>
    )
}
export default Contatos

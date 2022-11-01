import { Link } from "react-router-dom"

const Contatos = () => {
    return (
        <>
            <h1>Contatos 📞</h1>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/Galeria'>Galeria</Link></li>
            </ul>

            <ol>
                <li><Link to='./1'>Contato 01</Link></li>
                <li><Link to='./2'>Contato 02</Link></li>
                <li><Link to='./3'>Contato 03</Link></li>
            </ol>
        </>
    )
}
export default Contatos

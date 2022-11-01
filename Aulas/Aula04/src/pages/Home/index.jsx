import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <h1>Home 🏠</h1>
            <ul>
                <li><Link to='/contatos'>Contatos</Link></li>
                <li><Link to='/galeria'>Galeria</Link></li>
            </ul>
        </>
    )
}
export default Home
import { Link } from "react-router-dom";

export function Galeria() {
   return (
      <>
         <h1>Galeria 🖼️</h1>
         <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/contatos'>Contatos</Link></li>
         </ul>
      </>
   )
}


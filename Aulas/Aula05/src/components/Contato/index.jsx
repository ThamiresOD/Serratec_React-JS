//Criar um array de 3 contatos no App.jsx contendo { id, nome, email } 
//Componente contato recebe 1 contato via props
//Exibir Informações do Contato na tela
//Chamar componente Contato lá no JSX do App.jsx


// function Contato(props) {
//     return (
//         <div style={{backgroundColor: "lightgray", color: "blue", padding: 10, marginBottom: 10}}>
//             <h1>id: {props.contato.id}</h1>
//             <h1>nome: {props.contato.nome}</h1>
//             <h1>email: {props.contato.email}</h1>
//         </div>
//     )
// }
// export default Contato

function Contato({ contato }) {
    return (
        <div style={{backgroundColor: "lightgray", color: "blue", padding: 10, marginBottom: 10}}>
            <h1>Id: {contato.id}</h1>
            <h1>Nome: {contato.nome}</h1>
            <h1>Email: {contato.email}</h1>
        </div>
    )
}
export default Contato
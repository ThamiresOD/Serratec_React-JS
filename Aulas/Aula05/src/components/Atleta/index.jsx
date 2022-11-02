
function Atleta({atleta}) {
    return (
        <div style={{backgroundColor: "lightgray", color: "blue", padding: 10, marginBottom: 10}}>
        <h1>id: {atleta.id}</h1>
        <h1>nome: {atleta.nome}</h1>
        <h1>esportes: {atleta.esporte[0]}, {atleta.esporte[1]}</h1>
        </div>
    )
}
export default Atleta
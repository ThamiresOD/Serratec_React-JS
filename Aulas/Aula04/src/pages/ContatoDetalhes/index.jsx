import { useParams } from 'react-router-dom'

const ContatoDetalhes = () => {
    const { id } = useParams();

    console.log(typeof (id));

    const renderizaNome = () => {
        switch (id) {
            case '1':
                return "Thamires"
            case '2':
                return "Vi"
            case '3':
                return "Ashe"
            default:
                return "Desconhecido"

        }
    }

    // Operador Lógico
    //{id == '3' && "Thata"}

    // Operador Ternário
    //{id == 3 ? "Thata" : null


    return (
        <h1>
            Contato: {renderizaNome()}
        </h1>
    )
}
export default ContatoDetalhes
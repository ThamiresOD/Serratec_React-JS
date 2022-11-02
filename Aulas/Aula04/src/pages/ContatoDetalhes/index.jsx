import { useParams, useLocation } from 'react-router-dom'

const ContatoDetalhes = () => {
    const { id } = useParams();
    const { state } = useLocation();

    console.log(state)
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

    //Renderização Condicional
    // Operador Lógico
    //{id == '3' && "Thata"}

    // Operador Ternário
    //{id == 3 ? "Thata" : null


    // return (
    //     <h1>
    //         Contato: {renderizaNome()}
    //     </h1>
    // )

    // return (
    //     <h1> 
    //         {/* Renderização Condicional com operador lógico */}
    //         {id == '2' && "Contato: Amanda que veio do &&"}
    //         {/* Contato: {renderizaNome()} */}
    //         {/* Renderização condicional com operador Ternário */}
    //         {id == 3 ? "Caroline do Operador ternário" : null}
    //     </h1>
    // );

        return (
            <h1>
                {state.nome}
            </h1>
            
        )
}
export default ContatoDetalhes
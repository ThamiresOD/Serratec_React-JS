
import { useState } from 'react'
import Agua from '../Agua'

// function Element() {
//     const [count, setCount] = useState(0)
//     var x = document.createElement("INPUT")
//     x.setAttribute("type", "button")
//     x.setAttribute("value", '🍺')
//     document.body.appendChild(x)

//     return (
//         <button onClick={Element + (count=1)}>Add!</button>
//     )
// }

//   export default Element

function Goal(props) {
    const [goal, setGoal] = useState()
    const [result, setResult] = useState("")


    return (
        <>
            <h2 className='countMeta'>Faltam { } copos ({ } mls), para bater sua meta diária!</h2>
            <h2>atingido {result}</h2>

            <div>
                <label>
                    <h2 className='countMeta'>Sua meta diária é: </h2>
                </label>
                <input
                    type="number"
                    id='countGoal'
                    placeholder='digite sua meta de ingestão diária'
                    value={goal}
                    onChange={e => setGoal(e.target.value)}
                />
            </div>
        </>
    )
}
export default Goal

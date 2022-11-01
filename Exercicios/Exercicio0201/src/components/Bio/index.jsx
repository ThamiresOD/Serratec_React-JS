
import { useState } from 'react'
import './style.css'

function Bio() {
    const [caneco, setCount] = useState(0)
    const [meta, setMeta] = useState(0)
    const [ml, setML] = useState(0)

    let vi = 0

    const volumeIngerido = () => {
        vi = caneco * ml
    }

    return (
        <>
            <div id='values'>
                <label for="mls">Digite o volume do copo: </label>
                <input 
                    type="number" 
                    id="mls"
                    placeholder='digite o volume do copo em mililitros'
                    value={setML}
                    // onChange={}
                />
            </div>
            <div id='results'>
                <h2 className='countPrint'>Você já virou: {caneco} conecos</h2>
                <h2 className='countML'>Você ingeriu {ml} mls</h2>
                <h2 className='total'>Total: {vi}</h2>
                <h2 className='countMeta'>Sua meta diária é: { }</h2>
                <h2 className='countMeta'>Faltam { } copos ({ } mls), para bater sua meta diária!</h2>
            </div>
            <div id='bottons'>
                <h1>Copos</h1>
                <button onClick={() => setCount(caneco + 1)}>Add!</button>
                <button onClick={() => setCount(caneco - 1)}>Dec!</button>
                <button onClick={() => setCount(0)}>Reset!</button>
            </div>
        </>
    )
}
export default Bio


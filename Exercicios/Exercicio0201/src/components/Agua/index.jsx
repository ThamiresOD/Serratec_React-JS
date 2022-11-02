
import { useState } from 'react'
import './style.css'

function Agua() {
    const [copo, setCopo] = useState(0)
    const [ml, setML] = useState(200)
    const [goal, setGoal] = useState(2000)
    const [result, setResult] = useState("")
    const [attain, setAttain] = useState("")
    const [hist, setHist] = useState("")
    const date = new Date().toLocaleString()

    const Add = () => {
        if (((copo + 1) * ml) >= goal) {
            setResult('Parabéns! Você atingiu sua meta diária')
        } else {
            setResult(`Faltam ${((goal - ((copo + 1) * ml)) / ml)} copos (${goal - ((copo + 1) * ml)} mls), para bater sua meta diária!`)
        }
        setCopo(copo + 1)
        setHist(`✅ Add: ${date} ${hist}`)

        if (!copo >= 0) {
            setAttain(`Você já virou ${copo + 1} copos, ${(copo + 1) * ml} mls!`)
        }
    }

    const Dec = () => {
        setCopo(copo - 1)

        if (copo <= 0) {
            setCopo(0)
        } else {
            setResult(`Faltam ${((goal - (copo * ml)) / ml)} copos (${goal - (copo * ml)} mls), para bater sua meta diária!`)
            setAttain(`Você já virou ${copo} copos, ${(copo + 1) * ml} mls!`)
            setHist(`❌ Dec: ${date} ${hist}`)
        }
    }

    const Reset = () => {
        setCopo(0)
        setResult("")
        setML(200)
        setHist("")
        setAttain("")
    }

    return (
        <>
            <header>
                <div id='values'>
                    <label for="mls">Digite o volume do copo: </label>
                    <input
                        type="number"
                        min={0}
                        id="mls"
                        placeholder='digite o volume do copo em mililitros'
                        value={ml}
                        onChange={e => setML(e.target.value)}
                    />
                </div>

                <div>
                    <label className='countMeta'>Digite sua meta diária: </label>
                    <input
                        type="number"
                        min={0}
                        id='countGoal'
                        placeholder='digite sua meta de ingestão diária'
                        value={goal}
                        onChange={e => setGoal(e.target.value)}
                    />
                </div>
            </header>


            <>
                <div id='results'>
                    <h2 className='countPrint'>{attain}</h2>
                </div>

                <div id='bottons'>
                    <h1>🍺</h1>
                    <button onClick={Add}>Add!</button>
                    <button onClick={Dec}>Dec!</button>
                    <button onClick={Reset}>Reset!</button>
                </div>

                <div>
                    <h2>{result}</h2>
                </div>

                <nav>
                    <h3>Histórico</h3>
                    <div className="historico">
                        <p>{hist}</p>
                    </div>
                </nav>
            </>

        </>
    )
}
export default Agua


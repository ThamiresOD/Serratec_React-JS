
import { useState } from 'react'
import './style.css'

function Bio() {
    const [count, setCount] = useState(0) 
    let ml= 0

    return (
        <>
            <h1 className="countPrint">{count}</h1>
            <div>
                <label for="mls">Digite o volume do copo: </label>
                <input type="number" id="mls"/>
            </div>
            <div>
                <button onClick={() => setCount(count+1)}>Add!</button>
                <button onClick={() => setCount(count-1)}>Dec!</button>
                <button onClick={() => setCount(0)}>Reset!</button>
            </div>
        </>
    )
}
export default Bio


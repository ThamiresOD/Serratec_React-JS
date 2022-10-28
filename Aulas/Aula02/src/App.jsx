// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

import {useState} from 'react'

  // Arrow Function
  //let funcao = () => console.log("Funcao")

  function App() {
    const [count, setCount] = useState(0)
  
    return(
      <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Add!</button>
        <button onClick={() => setCount(count-1)}>Dec!</button>
        <button onClick={() => setCount(count-count)}>Reset!</button>
      </>
    )
  }
  export default App



// function App() {
//   const [count, setCount] = useState(0)
  
//   function add() {  
//     setCount(count+1)
//   }

//   function dec() {  
//     setCount(count-1)
//   }
  
//   function reset() {
//     setCount(0)
//   }

//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={add}>Add!</button>
//       <button onClick={dec}>Decrease!</button>
//       <button onClick={reset}>Reset aqui!</button>
//     </>
//   )
// }
// export default App

//*************************************************************** */


// Variáveis no JS também podem guardar funções
// let nome= "Thata"


// function App() {
//   const [outroNome, setOutroNome] = useState("Thata")
  
//   function clique() {
//     nome = "Romin"
//     console.log(nome)
  
//     setOutroNome("Romin")
//   }

//   return(
//     <>
//       <h1>{outroNome}</h1>
//       <button onClick={clique}>Clique aqui!</button>
//     </>
//   )
// }
// export default App

import { useState, useEffect } from 'react'
import './App.css'
import api from './services/api'


function App() {
  const [cat, setCat] = useState([])

  const getCat = async() => {
    const { data } = await api.get("/images/search")
    setCat(data)
    console.log(data)
  }

  useEffect(() => {
    getCat();
  },[])

  return (
    <>
      <h1>Use Effect</h1>
      <h1>{cat.length > 0 && cat[0].url}</h1>
    </>
  )
}

export default App

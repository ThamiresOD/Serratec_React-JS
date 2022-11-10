
import { useState } from 'react'
import './App.css'
import { FaLinkedin, FaReact } from 'react-icons/fa'
import { Button, Container, Row, Col, Form, Stack} from 'react-bootstrap';

const tasks = [
  {
    id: 1,
    titulo: "Primeira Task",
    descricao: "Descrição da Primeira Task",
    prioridade: "URGENTE"
  },
  {
    id: 2,
    titulo: "Segunda Task",
    descricao: "Descrição da Segunda Task",
    prioridade: "URGENTE"
  },
  {
    id: 3,
    titulo: "Terceira Task",
    descricao: "Descrição da Terceira Task",
    prioridade: "URGENTE"
  },
]

function App() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [prioriodade, setPrioridade] = useState("")
  const [taskList, setTaskList] = useState([])
  const [loading, setLoading] = useState(true)

  const handleTask = async () => {
    if(titulo == "" || prioriodade == "" || descricao == "") {
      alert("Preencha todos os campos")
      return
    }
    
    const newTask = {
      titulo: titulo,
      descricao: descricao,
      prioriodade: prioriodade,
    }

    const { data } = await api.post("/tasks", newTask)
    setTaskList([...taskList, data])
    console.log(data)


    setTitulo("")
    setDescricao("")
    setPrioridade("")
  }

  useEffect(() => {
    const getTasks = async () => {
      setLoading(true)
      const { data } = await api.get("/tasks");
      setTaskList(data)
      setLoading(false)
    }
    getTasks()
  }, [])

  return (
    <Container className="bg-secondary">
      <h1 className='text-center'>Lista de Tarefas</h1>

      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Título:</Form.Label>
          <Form.Control type="text" placeholder="Insira o título" onChange={ e => setTitulo(e.target.value)} value={titulo} />
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={ e => console.log(e.target.value)}>
          <option>Escolha a prioridade</option>
          <option value="baixa">Baixa</option>
          <option value="normal">Normal</option>
          <option value="urgente">Urgente</option>
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control as="textarea" rows={3} onChange={ e => setDescricao(e.target.value)} value={descricao} />
        </Form.Group> 

        <Button className="float-end" onClick={handleTask}>Cadastrar Nova Tarefa</Button>
      </Form>

      <Stack>
      {tasks.map( item => {
        return <li key={item.id}>{item.titulo}</li>
      })}
      </Stack>

    </Container>

  )
}

export default App


import './App.css'
import Bio from './components/Bio'
import Footer from './components/Footer'

import Header from './components/Header'


function App() {
  return (
    <>
      <Header/>
      <Bio nome="Thamires"/>
      <Footer/>
    </>
  )
}

export default App

// Atividade proposta:

// Criar um projeto novo com Vite;
// Criar uma pasta chamada "components" dentro de "src";

// Criar um componente chamado Header, definir uma altura de 100px e uma cor de fundo azul; (Importar css e usar className, igual vimos em aula);
// Criar um componente chamado Bio contendo um h2 com nome centralizado e um botao de "Saiba mais" centralizado;
// Criar um componente chamado Footer contendo um p com alguma frase. Fundo preto e texto na cor branca;

// Importar todos os componentes no arquivo App;
// Passar o nome para o componente Bio via props;

// Concluída!
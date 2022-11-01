import './style.css';
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

  const handleLogin = () => {
    console.log("Login: ", login)
    console.log("Senha: ", senha)
  }

  return (
    <div>
      <h1>Faça seu Login</h1>

      <h2>Login</h2>
      <input
        type="text"
        placeholder="Digite seu login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <h2>Senha</h2>
      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <div style={{ marginTop: 20 }}>
        <input type="button" value="ENTRAR" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;

//Criar um novo componente e importar main.jsx
//Criar um input para salvar o nome da pessoa
//Criar um input para salvar a idade da pessoa
//Criar um botão para executar uma função
//A Função deve verificar se a idade da pessoa é menor que 18 anos ou maior
//Mostrar na tela: "Olá fulano, você é menor/ou maior de idade";
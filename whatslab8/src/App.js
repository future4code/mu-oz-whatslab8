import './App.css';
import styled from 'styled-components'

function AdicionarMensagem() {
  let usuario = document.getElementById('usuario').value
  let mensagem = document.getElementById('mensagem').value
  let chat = document.getElementById('chat')

  chat.innerHTML += `${usuario} ${mensagem}\n`;

  console.log({usuario, mensagem})
}

const Raiz = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid gray;
  height: 99vh;
  width: 600px;
  margin: 0 auto;
`

const Chat = styled.div `
  background-color: gray;
`

const Inputs = styled.div `
  display: flex;
  background-color: orange;
`

const InputUsuario = styled.input `
  width: 25%;
`
const InputMensagem = styled.input `
  width: 60%;
`
const BotaoEnviar = styled.button `
  width: 15%;
`


function App() {
  return (
    <div className="App">
      <Raiz className="raiz">
        <Chat className="chat" id="chat">
        </Chat>
        <Inputs className="inputs">
          <InputUsuario type="text" placeholder="Usuário" id="usuario"></InputUsuario>
          <InputMensagem type="text" placeholder="Mensagem" id="mensagem"></InputMensagem>
          <BotaoEnviar onClick={AdicionarMensagem}>Enviar</BotaoEnviar>
        </Inputs>
      </Raiz>
    </div>
  );
}

export default App;

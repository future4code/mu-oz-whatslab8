import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
import DinamicaTexto from './components/DinamicaTexto';

// Estilos definidos aqui serão aplicados a toda a aplicação
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #139fa0 #000;
  }

  /* Chrome, Edge, e Safari */
  *::-webkit-scrollbar {
    width: 12px;
    padding-top: 10px
  }

  *::-webkit-scrollbar-track {
    background: transparent;
    margin-top: 15px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #139fa0a3;
    border-radius: 20px;
    border: 3px solid #000;
  }
`

const Raiz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`


function App() {
  return (
    <Raiz>
      <GlobalStyle />
      <DinamicaTexto />
    </Raiz>
  );
}

export default App;

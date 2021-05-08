import React from "react";
import styled from 'styled-components';


const Main = styled.div`
  background-image: url('https://i.pinimg.com/originals/58/c3/33/58c33377dfcbb3022493dec49d098b02.jpg');
  background-size: contain;
  border-radius: 25px; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 80vh;
  width: 80vw;
  max-width: 500px;
  margin: 0 auto;
`

const DivChat = styled.div`
  overflow-y: auto;
  border-radius: 25px 25px 0 0; 
`

const DivInputs = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1e2428;
  padding: 10px 15px;
  border-radius: 0 0 25px 25px;
`
const InputUsuario = styled.input`
  width: 23%;
  border-radius: 5px;
  border: none;
  padding: 5px;
  
  :focus-visible {
    outline: none;
    background-color: #eaeaea;
}
`
const InputMensagem = styled.input`
  width: 58%;
  border-radius: 5px;
  border: none;
  padding: 5px;
  
  :focus-visible {
    outline: none;
    background-color: #eaeaea;
}
`
const BotaoEnviar = styled.button`
  width: 13%;
  border-radius: 5px;
  border: none;
  padding: 5px;
`

const BalaoMensagem = styled.p`
    background-color: #056162;
`
const BalaoMensagem2 = styled.p`
    background-color: #262d31;
`


class DinamicaTexto extends React.Component {
    state = {
        mensagens: [
            {
                usuario: "",
                mensagem: ""
            }
        ],
        listaDeMensagens: [],

        valorInputUsuario: "",
        valorInputMensagem: ""
    };

    adicionaChat = () => {

        const novoChat = {
            usuario: this.state.valorInputUsuario + ":",
            mensagem: this.state.valorInputMensagem
        };

        const novasMensagens = [...this.state.mensagens, novoChat];

        this.setState({ mensagens: novasMensagens, valorInputUsuario: "", valorInputMensagem: "" })

    };

    onChangeInputUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
    };


    render() {
        const listaDeComponentes = this.state.mensagens.map((mensagem) => {
            return (<BalaoMensagem>{mensagem.usuario} {mensagem.mensagem}</BalaoMensagem>);
        });



        return (

            <Main>

                <DivChat>
                    {listaDeComponentes}
                </DivChat>

                <DivInputs>
                    <InputUsuario
                        type="text"
                        placeholder="Usuário"
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeInputUsuario}
                    />
                    <InputMensagem
                        type="textarea"
                        placeholder="Mensagem"
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                    />
                    <BotaoEnviar type={"submit"} onClick={this.adicionaChat}>Enviar</BotaoEnviar>
                </DivInputs>


            </Main>

        );
    }
}

export default DinamicaTexto;
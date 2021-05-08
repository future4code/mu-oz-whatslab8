

import React from "react";
import styled from 'styled-components';



/* function AdicionarMensagem() {
  let usuario = document.getElementById('usuario').value
  let mensagem = document.getElementById('mensagem').value
  let chat = document.getElementById('chat')

  chat.innerHTML += `${usuario} ${mensagem}\n`;

  console.log({usuario, mensagem})
} */

const Raiz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid gray;
  height: 99vh;
  width: 600px;
  margin: 0 auto;
`

const Chat = styled.div`
  background-color: gray;
`

const Inputs = styled.div`
  display: flex;
  background-color: orange;
`

const InputUsuario = styled.input`
  width: 25%;
`
const InputMensagem = styled.input`
  width: 60%;
`
const BotaoEnviar = styled.button`
  width: 15%;
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

        this.setState({ mensagens: novasMensagens, valorInputUsuario: "", valorInputMensagem: ""})
        /* const copiLista = [...this.state.mensagens]
        this.setState({ listaDeMensagens: copiLista}) */
        
        


    };



    onChangeInputUsuario = (event) => {

        this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {

        this.setState({ valorInputMensagem: event.target.value });
    };





    render() {

        

        const listaDeComponentes = this.state.mensagens.map((mensagem) => {

             return (<p>{mensagem.usuario} {mensagem.mensagem}</p>);
            
           

            });
        
        
        
        return (

            <Raiz>

                <div>
                    {listaDeComponentes}
                </div>

                <div className="inputs">


                    <input
                        type="text"
                        placeholder="Usuário"
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeInputUsuario}
                    />
                    <input
                        type="text"
                        placeholder="Mensagem"
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                    />
                    <button onClick={this.adicionaChat}>Enviar</button>


                </div>


            </Raiz>

        );
    }
}

export default DinamicaTexto;
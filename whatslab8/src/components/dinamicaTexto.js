import React from "react";
import styled from 'styled-components';
import BalaoDeMensagem from './BalaoDeMensagem'


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
  display: flex;
  flex-direction: column-reverse;
`

const Form = styled.form`
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

  :hover{
    background-color: #afafaf;
    transition: ease 0.2s;
  }
`


class DinamicaTexto extends React.Component {
    state = {
        mensagens: [],
        valorInputUsuario: "",
        valorInputMensagem: ""
    };

    adicionaChat = (event) => {
        event.preventDefault()

        if (this.state.valorInputUsuario !== "" && this.state.valorInputMensagem !== "") {

            const novoChat = {
                usuario: this.state.valorInputUsuario + ":",
                mensagem: this.state.valorInputMensagem
            }

            const novasMensagens = [novoChat, ...this.state.mensagens]

            this.setState({ mensagens: novasMensagens, valorInputMensagem: "" })

        } else {
            alert('Preencha todos os campos.')
        }

    };

    onChangeInputUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
    };

    deletarMensagem = (indexApagar) => {

        if (window.confirm('Você realmente deseja excluir esta mensagem?')) {
            this.setState({
                mensagens: this.state.mensagens.filter((mensagem, indice) => indexApagar !== indice)
            })
        }
    }


    render() {
        const listaDeComponentes = this.state.mensagens.map((mensagem, index) => {
            return <BalaoDeMensagem 
            usuario={mensagem.usuario}
            mensagem={mensagem.mensagem}
            index={index}
            funcaoDeletar={this.deletarMensagem}
            />
        });
        console.log(listaDeComponentes)
        
        return (
            <Main>
                <DivChat>
                    {listaDeComponentes}
                </DivChat>

                <Form onSubmit={this.adicionaChat}>
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
                    <BotaoEnviar type={"submit"}>Enviar</BotaoEnviar>
                </Form>
            </Main>
        );
    }
}

export default DinamicaTexto;
import React from 'react'
import styled from 'styled-components'

const BalaoMensagemBase = styled.p`
    color: whitesmoke;
    padding: 8px 4px;
    border-radius: 5px;
    margin: 2px 10px;
    width: fit-content;
    max-width: 90%;
    overflow-wrap: anywhere;

    :last-child{
        margin-top: 20px;
    }
`
const BalaoMensagemDireita = styled(BalaoMensagemBase)`
    background-color: #056162;
    place-self: flex-end;
`

const BalaoMensagemEsquerda = styled(BalaoMensagemBase)`
    background-color: #262d31;
`

export default function BalaoDeMensagem(props) {
    if (props.usuario === "eu:") {
        return (
            <BalaoMensagemDireita
                key={props.index}
                onDoubleClick={() => props.funcaoDeletar(props.index)}>
                <strong>{props.usuario}</strong> {props.mensagem}
            </BalaoMensagemDireita>
        )
    } else {
        return (
            <BalaoMensagemEsquerda
                key={props.index}
                onDoubleClick={() => props.funcaoDeletar(props.index)}>
                <strong>{props.usuario}</strong> {props.mensagem}
            </BalaoMensagemEsquerda>
        )
    }
}
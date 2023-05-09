import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const mudarNome = (event) =>{    
    setNome(event.target.value)
  }
  const mudarIdade = (event) =>{
    setIdade(event.target.value)
  }
  const mudarEmail = (event) =>{
    setEmail(event.target.value)
    }
  const mudarSenha = (event) =>{
    setSenha(event.target.value)
  }

  const btnEnviar =() => {
    setNome("")
    setIdade("")
    setEmail("")
    setSenha("")
  }
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={mudarNome} />
        </label>
        <label>
          Idade:
          <Input type='number' value={idade} onChange={mudarIdade}/>         
        </label>  
        <label>
          E-mail:
          <Input type='email' value={email} onChange={mudarEmail}/>
        </label>
        <label>
          Senha:
          <Input type='password' value={senha} onChange={mudarSenha}/>
        </label>
        <button onClick={btnEnviar}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage

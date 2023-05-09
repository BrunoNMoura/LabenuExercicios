import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForms from '../../hooks/useForms'
import { irParaCadastro, irParaFeed } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'

export default function Login() {
  const navigate = useNavigate()

  const { form, onChange } = useForms({ email: "", password: "" })

  const enviaLogin = (e) => {
    e.preventDefault()
    console.log(form)
    axios.post(`${BASE_URL}/users/login`,form)
    .then((response)=>{
      console.log("resposta do login",response.data.token)
      localStorage.setItem("token",response.data.token)
      irParaFeed(navigate)
    })
    .catch((err)=>{
      console.log("erro do login",err.data.token)
    })
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input id='email'
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
        />
        <label htmlFor='senha'>Senha:</label>
        <Input id='senha'
          name="password"
          minLength={8}
          value={form.password}
          onChange={onChange}
          type='password'
          placeholder="Digite sua senha"
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}

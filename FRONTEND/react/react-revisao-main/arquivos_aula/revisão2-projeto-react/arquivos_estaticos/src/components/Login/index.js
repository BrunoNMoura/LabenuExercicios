import * as LS from './styled'
import * as GS from '../../styles'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { useState } from 'react';

export default function Login({setLogado}) {
  const [form,onChange] = useForm({email:"",password:""})

  const [isLoanding, setIsLoanding]=useState(false)

  
  
  const handleSubmit= (e)=>{
    e.preventDefault()
    setIsLoanding(true)
    axios.post(`${BASE_URL}/user/login`, form)
    .then((res)=>{
      setIsLoanding(false)
      setLogado(true)
      alert(res.data.message);
      localStorage.setItem('token', res.data.token)
    })
    .catch((error)=>{
      setIsLoanding(false)
      alert(error.response.data)
    })
  }

  return <LS.StyledContainer>
    {
      isLoanding &&
      <LS.StyledLoginMensagem>Carregando...</LS.StyledLoginMensagem>
    }    
      <GS.StyledForm onSubmit={handleSubmit} >
      <GS.StyledLabel htmlFor='email'>E-mail</GS.StyledLabel>
      <GS.StyledInput required type='email'  id='email' name='email' value={form.email} onChange={onChange} />
      <GS.StyledLabel htmlFor='password'>Password</GS.StyledLabel>
      <GS.StyledInput required type='password' id='password' name='password' value={form.password} onChange={onChange} />
      <GS.StyledLink>Fazer cadastro</GS.StyledLink>
      <GS.StyledButton>Login</GS.StyledButton>
    </GS.StyledForm>
  </LS.StyledContainer>
    ;
}
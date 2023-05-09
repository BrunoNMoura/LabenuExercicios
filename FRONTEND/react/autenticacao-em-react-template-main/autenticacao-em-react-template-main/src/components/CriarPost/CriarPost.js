import React from 'react'
import { FormPost, Input, TextArea } from './styled'
import useForms from '../../hooks/useForms'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { irParaFeed } from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import useProtectedPage from '../../hooks/useProtected'

export default function CriarPost(receberDados) {

  useProtectedPage()
  const { form, onChange, limparCampos } = useForms({title: "",
	body: ""})

  const token = localStorage.getItem("token")

  const headers ={
      headers:{
        Authorization:token
      }
    }
    useRequestData()
  const enviarPost = (e) => {
    e.preventDefault()
    console.log("entrou")    
    axios.post(`${BASE_URL}/posts`,form,headers)
    .then((response)=>{
      console.log("resposta do Post",response.data.token)     
      receberDados()
      limparCampos()      
    })
    .catch((err)=>{
      console.log("erro do login",err.response)
    })
  }

//const [] = useRequestData([],'/posts', headers)

  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor='tituloPost'>Título:</label>
      <Input 
      id='tituloPost'
      name='title'
      value={form.title}
      onChange={onChange}
      type='text'
      placeholder='digite um título para o seu post' 
      required
      />
      <label htmlFor='textoPost'>Texto:</label>
      <TextArea 
      id='textoPost'
      name='body'
      value={form.body}
      onChange={onChange}
      type='text'
      placeholder='crie um post!' 
      required/>
      <button>Enviar</button>
    </FormPost>
  )
}

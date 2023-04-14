import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from '../../Hooks/useForm'

function MainPage() {
 
  const [form, onChange, setForm] = useForm({nome:"",modulos:"",tecnologias:"",responsavel:""})

  const enviaCurso = (e) => {
    e.preventDefault();
    setForm({ nome:"",modulos:"",tecnologias:"",responsavel:"" });
    console.log({ form });
  };

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={enviaCurso}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name='nome'
          value={form.nome}
          onChange={onChange}
          type='text'
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name='modulos'
          value={form.modulos}
          onChange={onChange}
          type='number'
          min={2}
          title={'Conter no mínimo 2 módulos'}          
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name='tecnologias'
          value={form.tecnologias}
          onChange={onChange}
          type='text'
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name='responsavel'
          value={form.responsavel}
          onChange={onChange}
          type='text'
          pattern='^[a-zA-Zà-úÀ-Ú\s]{5,}$'
          title={'Conter no mínimo 5 caracteres'}
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage

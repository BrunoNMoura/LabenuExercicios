import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const User = styled.div`
  border: black 1px solid;
  margin-top: 8px;
  width: 350px;
  padding: 8px;
`
function Usuario(props) {
  const [usuario, setUsuario] = useState(props.usuario);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  const getUserById = ()=>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${props.usuario.id}`, props.headers)
    .then((response)=>{
      setEmail(response.data.email)
    })
    .catch((error)=>{
      alert(error.response)     
    })
  }

  useEffect(()=>{getUserById()},[])

  const editUser = (nome, email)=>{
    const body = {
      name:nome,
      email    
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,body, props.headers)
    .then((response)=>{
      console.log(response)      
      alert("Usuário Alterado com Sucesso!")
      props.getAllUsers()
    })
    .catch((error)=>{
      console.log(error.response)
    })
  }

  const deleteUser = (nome, email) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`, props.headers)
    .then((response)=>{
      console.log(response)
      alert("Usuário deletado com sucesso!")
      props.getAllUsers()
    })
    .catch((error)=>{
      console.log(error.response)
    })
  }

  return (
    <User>
      {editar ? (
        <div>
          <p>Nome: {usuario.name}</p>
          <p>E-mail: {usuario.email}</p>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={()=>{editUser(nome,email)}}>Enviar alterações</button>
        </div>
      ) : (
        <>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>E-mail:</strong> {email}</p>
        </>
      )}
     {/*  <button onClick={() => editUser(nome, email)}>Editar</button> */}
    <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={()=>{deleteUser(nome, email)}}>Excluir</button>
    </User>
  );
}

export default Usuario;

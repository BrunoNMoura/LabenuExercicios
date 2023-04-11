import axios from "axios";
import React, { useEffect, useState } from "react";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const creatUsers = (nome, email)=>{
    const body = {
      name:nome,
      email
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,props.headers)
    .then((response)=>{
      console.log(response)
      alert("Ususário Cadastrado com Sucesso!")
      setNome("")
      setEmail("")
      props.getAllUsers()
    })
    .catch((error)=>
      alert(error.response.data.message)
    )
  }
 

  return (
    <>
      <h3>Adicionar novo usuario</h3>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={()=>{creatUsers(nome,email)}}>Enviar</button>
    </>
  );
}

export default AddUsuario;

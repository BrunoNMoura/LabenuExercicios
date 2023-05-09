import axios from "axios";
import React, { useState } from "react";
import { Auth_token, Bruno_Name } from "../../Constants/Auth_token";
import { UrlBase } from "../../Constants/Base_Url";
import { InputCadastro, ContainerCadastro } from './style'

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const postNovoUsuario =  () => {
    try {
      const body = {
      name: nome,
      email
    };
    axios
      .post(UrlBase,body,{headers:{Authorization: Bruno_Name}})
      alert("usuario criado!");
        props.getUsuarios();
        setEmail("");
        setNome("");
    } catch (error) {
      console.log("erro add", error.response);
    }    
     
  };

  return (
    <ContainerCadastro>
      <h3>Cadastrar novo usuario</h3>
      <InputCadastro
        placeholder={"Nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <InputCadastro
        type="email"
        placeholder={"E-mail"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={postNovoUsuario}>Enviar</button>
    </ContainerCadastro>
  );
}

export default AddUsuario;
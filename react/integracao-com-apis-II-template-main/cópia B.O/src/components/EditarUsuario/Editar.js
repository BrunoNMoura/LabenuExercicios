import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonNome, DeleteButton, ButtonContainer, MainContainer, InputContainer, SaveButton, CloseButton } from './style'
import { AiOutlineDelete } from 'react-icons/ai'
import { Input } from "../../Appstyle";
import { UrlBase } from "../../Constants/Base_Url";
import { Auth_token, Bruno_Name } from "../../Constants/Auth_token";
import { Header } from "../Header/Header";

export const EditarUsuario = (props) => {
  const [usuario, setUsuario] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [editar, setEditar] = useState(false)


  const getDadosUsuario = async () => {
    try {
      const res = await axios
        .get(`${UrlBase}/${props.id}`, {headers:{Authorization: Bruno_Name}})
      setUsuario(res.data);
      setEmail(res.data.email);
      setName(res.data.name);
    } catch (error) {
      console.log(error.response);
    }

    useEffect(() => {
      getDadosUsuario();
    }, []);

    const editaUsuario = () => { 
      const body = {
        name,
        email  
      }  
      try {
        axios.put(`${UrlBase}/${usuario.id}`,body, {headers:{Authorization: Bruno_Name}})
        getDadosUsuario();
        setEditar(!editar)
      } catch (error) {
        console.log(error.response)
      }
    }

    const deletarUsuario = async () => {
      try {
       axios.delete(`${UrlBase}/${usuario.id}`, {headers:{Authorization: Bruno_Name}})
        alert("usuario removido");
        // chama de novo o get usuarios pra atualizar a lista
        props.getUsuarios();
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <MainContainer>

      {editar ? (
        <InputContainer>
          <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <SaveButton onClick={editaUsuario}>Salvar</SaveButton>
          <CloseButton onClick={() => setEditar(!editar)}>Fechar</CloseButton>
        </InputContainer>
      ) : (
        <ButtonContainer>
          <ButtonNome onClick={() => setEditar(!editar)}>{usuario.name}</ButtonNome>
          <DeleteButton onClick={deletarUsuario}><AiOutlineDelete /></DeleteButton>
        </ButtonContainer>
      )}
    </MainContainer>
  );
};

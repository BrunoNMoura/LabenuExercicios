import React, { useState, useEffect } from "react";
import LogoLoading from "../src/assets/logo.gif"
import { BASE_URL, BASE_URL_Potter } from "./constants/constants";
import axios from "axios";
import { Title, NameContainer, PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useCapturarNome } from "./Hooks/useCapturarNome";
import { useCapturarPostagens } from "./Hooks/useCapturarPostagens";
import { useRequestData } from "./Hooks/useRequestData";
function App() {

  //const nomeUsuarios = useCapturarNome()

  //const postagens = useCapturarPostagens() 

  const [nomeUsuarios, isLoadingNomes, isErrorNome] = useRequestData(`${BASE_URL_Potter}characters`,[])
  //const [nomeUsuarios, isLoadingNomes, isErrorNome] = useRequestData(`${BASE_URL}users`,[])
  const [postagens, isLoadingComentarios, isErrorComentarios] = useRequestData(`${BASE_URL}comments`,[])

  const renderNomes = nomeUsuarios.map((usuario) => {
    return (
      <Card
        key={usuario.id}
        text={usuario.name}
        backgroudColor={'nome'}
        textColor={'nome'}
      />)
  })

  const renderComenterios = postagens.map((post) => {
    //console.log(post);
    return (
      <Card
        key={post.id}
        text={post.body}
        backgroudColor={'#1dc690'}
        textColor={'#ffffff'}
      />)
  })

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        <div>
          {isLoadingNomes && <img src={LogoLoading} height={70}/>}
          {!isLoadingNomes && isErrorNome && <p>Ocorreu um erro!</p>}
          {!isLoadingNomes && nomeUsuarios && nomeUsuarios.length >0 && renderNomes}
        {!isLoadingNomes && !isErrorNome && nomeUsuarios && nomeUsuarios.length === 0 && <p>Lista Vazia!</p>}
        </div>
       
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isLoadingComentarios && <img src={LogoLoading} height={70}/>}
        {!isLoadingComentarios && isErrorComentarios && <p>Ocorreu um erro!</p>}
        {!isLoadingComentarios && postagens && postagens.length>0 && renderComenterios}
        {!isLoadingComentarios && !isErrorComentarios && postagens && postagens.length === 0 && <p>Lista Vazia!</p>}
      </PostContainer>
    </div>
  );
}

export default App;




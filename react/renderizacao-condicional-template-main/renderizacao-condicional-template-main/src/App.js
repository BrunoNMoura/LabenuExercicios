import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [page, setPage] = useState(1)

  const changePage = () => {
    {
      page === 1 ?
      setPage(page + 1) :
      setPage(page - 1)
    }
  }

  const register = () => {
    setPage(3)
  }

  switch (page) {
    case 1:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin changePage={changePage} />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaCadastro changePage={changePage} register={register}/>
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaUsuarioCadastrado />
        </MainContainer>
      );
    default:
      return "Página não encontrada"
  }


}

export default App;
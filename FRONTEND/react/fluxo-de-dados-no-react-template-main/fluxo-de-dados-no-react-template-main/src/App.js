import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  
  const [inputTitulo, setInputTitulo]= useState("")
  const [inputImage, setInputImage]=useState("")
  const [inputDescription, setInputDescription] = useState("")


  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
          inputTitulo ={inputTitulo}
          setInputTitulo = {setInputTitulo}
          inputImage = {inputImage} 
          setInputImage={setInputImage}
          inputDescription ={inputDescription}
          setInputDescription={setInputDescription}
          />
        </aside>
        <TelaDaPostagem
        inputTitulo={inputTitulo}
        inputImage={inputImage}
        inputDescription={inputDescription}        
        />
      </Container>
    </>
  );
}

export default App;

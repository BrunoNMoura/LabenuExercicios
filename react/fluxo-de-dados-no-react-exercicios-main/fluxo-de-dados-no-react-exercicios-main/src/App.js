import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
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

  const [inputName, setInputName] = useState("")
  const [inputProfilePicture, setInputProfilePicture] = useState("")
  const [newLogin, setNewLogin] = useState({})

  const [inputTitle, setInputTitle] = useState("")
  const [inputImage, setInputImage] = useState("")
  const [inputDescription, setInputDescription] = useState("")
  const [newPost, setNewPost] = useState({})

  const [pageFlow, setPageFlow] = useState(1);

  const login = () => {
    setPageFlow(2);
    setNewLogin({
      name: inputName,
      image: inputProfilePicture
    })
  };
  const insertPost = ()=>{
    setNewPost({
      title:inputTitle,
      image: inputImage,
      description: inputDescription
    })

  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header
            newLogin={newLogin}
          />
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow}
              inputName={inputName}
              setInputName={setInputName}
              inputProfilePicture={inputProfilePicture}
              setInputProfilePicture={setInputProfilePicture}

              login={login}
            />
          ) : (
            <FormularioPostagem
              inputTitle={inputTitle}
              setInputTitle={setInputTitle}
              inputimage={inputImage}
              setInputImage={setInputImage}
              inputDescription={inputDescription}
              setInputDescription={setInputDescription}
              insertPost={insertPost}
            />
          )}
        </aside>
        <TelaDaPostagem
          newPost={newPost}
        />
      </Container>
    </>
  );
}

export default App;

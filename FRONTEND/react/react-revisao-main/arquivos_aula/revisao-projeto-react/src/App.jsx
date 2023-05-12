import { createGlobalStyle } from "styled-components"
import { HomePage } from "./pages/homePage"



function App() {

  const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  `
  return (
    <>
      <GlobalStyle />
      <HomePage/>
    </>
  )
}

export default App

import React from "react";
import { createGlobalStyle } from "styled-components";
import CardVideo from "./Componentes/CardVideo";

import { Header, Main, MenuPrncipal, Footer } from "./styles";
/* import "./styles.css"; */

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <>
    <GlobalStyle/>
    <div>
      <div className="tela-inteira">
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <MenuPrncipal className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </MenuPrncipal>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </Main>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </div>
    </div>
    </>
  );
}

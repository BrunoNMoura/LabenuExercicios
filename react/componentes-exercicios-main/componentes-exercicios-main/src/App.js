import React from "react";
import "./styles.css";
import CardVideo from "./componentes/CardVideo";
/* import InfosUsuario from "./componentes/InfosUsuario"; */

export default function App() {
  const titulo = "Título do vídeo";
  /* const nome = "Ozemela" */
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  const video1 = {    
    imagem : "https://fastly.picsum.photos/id/132/400/400.jpg?hmac=p-aH9l9cGnUeqlmdgvGs6DUIZR1_3NcgKXDv0yXpns0",
    nome : "video1"
  }
  const video2 = {    
    imagem :"https://fastly.picsum.photos/id/132/400/400.jpg?hmac=p-aH9l9cGnUeqlmdgvGs6DUIZR1_3NcgKXDv0yXpns0",
    nome : "video2"
  }
  const video3 = {    
    imagem :"https://fastly.picsum.photos/id/132/400/400.jpg?hmac=p-aH9l9cGnUeqlmdgvGs6DUIZR1_3NcgKXDv0yXpns0",
    nome : "video3"
  }
  const video4 = {    
    imagem :"https://fastly.picsum.photos/id/132/400/400.jpg?hmac=p-aH9l9cGnUeqlmdgvGs6DUIZR1_3NcgKXDv0yXpns0",
    nome : "video4"
  }
  const video5 = {    
    imagem :"https://fastly.picsum.photos/id/132/400/400.jpg?hmac=p-aH9l9cGnUeqlmdgvGs6DUIZR1_3NcgKXDv0yXpns0",
    nome : "video5"
  }
  const video6 = {    
    imagem : "https://fastly.picsum.photos/id/132/400/400.jpg?hmac=p-aH9l9cGnUeqlmdgvGs6DUIZR1_3NcgKXDv0yXpns0",
    nome : "video6"
  }
  const video7 = {    
    imagem : "https://fastly.picsum.photos/id/132/400/400.jpg?hmac=p-aH9l9cGnUeqlmdgvGs6DUIZR1_3NcgKXDv0yXpns0",
    nome : "video7"
  }
  const video8 = {    
    imagem :"https://fastly.picsum.photos/id/132/400/400.jpg?hmac=p-aH9l9cGnUeqlmdgvGs6DUIZR1_3NcgKXDv0yXpns0",
    nome : "video8"
  }


  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
         {/*  <InfosUsuario/> */}
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>          
            <CardVideo
            video1 ={video1}            
            video2 ={video2}            
            video3 ={video3}            
            video4 ={video4}            
            video5 ={video5}            
            video6 ={video6}            
            video7 ={video7}            
            video8 ={video8}/>           
        </main>
        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

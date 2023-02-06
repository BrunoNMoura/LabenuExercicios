import React from "react";
import img from "../img/Img.png"


export  function InfosUsuario (){
    const nome = "Ozemela"
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido"); } 
    
    return(
        <div className = "box-pagina-principal" onClick={reproduzVideo}>
           <img src={props.video.imagem}/>
           <h4>{props.nome.nome}</h4>          
        </div>
    )
}
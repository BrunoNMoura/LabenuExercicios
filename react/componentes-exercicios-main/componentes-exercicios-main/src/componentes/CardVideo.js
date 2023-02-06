import React from "react";
import {InfosUsuario} from "./InfosUsuario";

 function CardVideo(props) {
    /* const titulo = "Título do vídeo"; */
     
    return (
        <div className="painel-de-videos">
            <InfosUsuario video = {props.video1}/>
            <InfosUsuario video = {props.video2}/>
            <InfosUsuario video = {props.video3}/>
            <InfosUsuario video = {props.video4}/>
            <InfosUsuario video = {props.video5}/>
            <InfosUsuario video = {props.video6}/>
            <InfosUsuario video = {props.video7}/>
            <InfosUsuario video = {props.video8}/>
        </div>
    )
}
export default CardVideo;

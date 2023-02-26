import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.newPost.title}</TitleHeader>
      <Image src={props.newPost.image} />
      <Description>{props.newPost.description}</Description>
    </ContainerPostagem>
  );
};
export default TelaDaPostagem;

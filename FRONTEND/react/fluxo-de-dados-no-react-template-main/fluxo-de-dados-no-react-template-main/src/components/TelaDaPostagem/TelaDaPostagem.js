import React from 'react'
import { ContainerPostagem, Image, Description, } from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <Description>{props.inputTitulo}</Description>
      <Image src={props.inputImage} alt='drone view' />
      <Description>{props.inputDescription}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem
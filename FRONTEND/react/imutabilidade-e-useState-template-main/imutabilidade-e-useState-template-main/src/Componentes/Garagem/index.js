import { useState } from 'react'
import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome,setNome }) {

  const [automovel, setAutomovel] = useState({
    cor:"Prata",
    ano: 2001,
    flex: false,
    adicionado: "Bruno",
    modelo:"Corsa Wind",
  })
  const carro1 = {
    cor:"Preto",
    ano: 2021,
    flex: true,
    adicionado: "Bruno",
    modelo:"Tesla",
  }
  const carro2={
    cor:"Azul",
    ano: 2022,
    flex: false,
    adicionado: "Danielle",
    modelo:"Maclaren",
  }
  const carro3={
    cor:"Vermelho",
    ano: 2023,
    flex: false,
    adicionado: "Bruno",
    modelo:"Ferrari",
  }

  function mudarCarro (){
    setAutomovel(carro3)
  }
   
   function mudarNomeGaragem (){
    setNome('Danielle Moura')
  } 


  return (
    <GaragemContainer>
      <h1>Garagem de {nome}</h1>
      <Botao onClick={mudarNomeGaragem}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}          
          ano={automovel.ano}
          adicionadoPor={automovel.adicionado}
          flex = {automovel.flex}
          mudarCarro={mudarCarro}
        />        
        
      </Estacionamento>
    </GaragemContainer>
  )
}

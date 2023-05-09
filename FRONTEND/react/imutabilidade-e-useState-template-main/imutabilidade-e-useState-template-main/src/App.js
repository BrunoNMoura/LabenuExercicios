import { PureComponent, useState } from 'react'
import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'

export default function App() {
 
  const [nome, setNome] = useState('Labenu')

/*   function btnMudaNome (){
    /* const novoNome = prompt ('Qual nome da sua Garangem ?')
    setNome(novoNome)
    ///setNome("Bruno")
  } */

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} setNome={setNome} />
     {/*  <Garagem nome={nome} btnMudaNome = {btnMudaNome} /> */}
    </div>
  )
}

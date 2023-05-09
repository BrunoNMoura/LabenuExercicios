import Garagem from "./Componentes/Garagem";
import "./styles.css";


export default function App() {
  const nome = 'Bruno'  
  const novoNome = 'Danielle'  

  const apresenteGaregem = (nomeDaGaragem) => {
    alert(`Boas vindas a Garagem de ${nomeDaGaragem}`)
  }
  
  const carro1 = {
    nome:'Tesla',
    cor:'prata',
    ano: 2021,
    flex: false 
  }

  const carro2 = {
    nome:'Audi RS e-tron GT',
    cor:'branco',
    ano: 2020,
    flex: true 
  }

  const carro3 = {
    nome:'BMW iX',
    cor:'vinho',
    ano: 2022,
    flex: true
  }

  const carro4 = {
    nome:'BYD Han',
    cor:'preto',
    ano: 2020,
    flex: true
  }

  const carroA = {
    nome:'Ferrari',
    cor:'vermelha',
    ano: 2010,
    flex: false
  }
  const carroB = {
    nome:'Porsh',
    cor:'Branco',
    ano: 2015,
    flex: false
  }
  const carroC = {
    nome:'Bugatti',
    cor:'preto',
    ano: 2018,
    flex: false
  }
  const carroD = {
    nome:'Mclaren',
    cor:'prata',
    ano: 2020,
    flex: false
  }

  return (
    <div className="conteinerApp">
      <Garagem nome={nome} apresenteGaregem={apresenteGaregem} carro1 = {carro1}
carro2 = {carro2}
carro3 = {carro3}
carro4 = {carro4}
/>
    <Garagem nome = {novoNome} apresenteGaregem={apresenteGaregem} carro1={carroA} carro2 = {carroB}
carro3 = {carroC}
carro4 = {carroD}/>
      
    </div>
  );
}



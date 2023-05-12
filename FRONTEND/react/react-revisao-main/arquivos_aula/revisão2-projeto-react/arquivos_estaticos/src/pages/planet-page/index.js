import Card from '../../components/Card';
import { CountContainer } from './styled'
import { StyledContainerCard, SButton } from '../../styles';


export default function PlanetPage() {
 
  //console.log({citizens});
  return (
    <>
      <CountContainer>
        <SButton >Escolher Ser</SButton>
        <p><span>0</span> - HABITANTES</p>
        <SButton>Criar novo Ser</SButton>
      </CountContainer>
      <StyledContainerCard>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </StyledContainerCard>
    </>
  );
}
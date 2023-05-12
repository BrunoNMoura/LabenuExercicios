import * as GS from '../../styles';
import * as LS from './styled'
import space from '../../assets/backgrounds/space-background.png'
import { useNavigate } from 'react-router-dom';
import { goToInstruction, goToPlanet } from '../../routes/coordinator';

export default function WellCome() {
  const navigate= useNavigate()
  return ( 
  <GS.StyledPageContainer image={space}>
    <GS.StyledTextContainer>
      <LS.StyledTitleContainer>Boas Vindas, NOME!</LS.StyledTitleContainer>
        <p>Bem Vinde ao planeta Rick! <br/>
          <br/>
          Ajude-nos a povoar o nosso planeta!
        </p>
        <LS.StyledButtonContainer>
          <GS.StyledButton onClick={()=>{goToInstruction(navigate)}}>Entenda o que Aconteceu</GS.StyledButton>
          <GS.StyledButton onClick={()=>{goToPlanet(navigate)}}>Ir para o planeta Rick</GS.StyledButton>
        </LS.StyledButtonContainer>
    </GS.StyledTextContainer>
   </GS.StyledPageContainer>
 );
}
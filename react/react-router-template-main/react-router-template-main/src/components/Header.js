import { goToHome, goToLogin, goToProfile } from "../routes/cordinator";
import { StyledHeader, StyledButton } from "../style"
import { useNavigate } from "react-router-dom"

function Header() {

  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={() => { goToHome(navigate) }}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => { goToProfile(navigate) }} >
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={()=>{goToLogin(navigate)}}>Ir para página de login</StyledButton>
    </StyledHeader>
  );
}

export default Header;

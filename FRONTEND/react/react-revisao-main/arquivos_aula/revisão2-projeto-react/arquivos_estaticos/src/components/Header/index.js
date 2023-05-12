import * as S from './styled'
import Arrow  from '../../assets/icons/leftArrow.svg'
import Rocket from '../../assets/icons/rocket.svg'
import { useNavigate } from 'react-router-dom'
import {goBack, goToHome} from '../../routes/coordinator'

export default function Header(){
    const navigate = useNavigate()

    return(
        <S.HeaderContainer>
        <S.HeaderStyle>
            <img onClick={()=>goBack(navigate)} src={Arrow} alt='flexa para esquerda'/>
            <p>Labe Rick</p>
            <img onClick={()=>goToHome(navigate)}src={Rocket} alt='icone de casa'/>
        </S.HeaderStyle>
        </S.HeaderContainer>
    )
}
import iconBack from '../../assets/icons/leftArrow.svg'
import iconHome from '../../assets/icons/rocket.svg'
import * as SL from './style'

const Header = () => {

    return (

        <SL.StyledHeader>            
            <SL.StyledImage src={iconBack} />
            <SL.StyledTitle>Lab Rick</SL.StyledTitle>
            <SL.StyledImage src={iconHome} />
        </SL.StyledHeader>
    )
}

export default Header
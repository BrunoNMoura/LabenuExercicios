import {TitleHeader,Image, ConteinerHeadar} from './styled'

export const Header = (props) => {

    return(
        <ConteinerHeadar>
        <TitleHeader>Insta4</TitleHeader>
        <Image src={props.newLogin.image} alt='drone view' />
        <TitleHeader>{props.newLogin.name}</TitleHeader>        
        </ConteinerHeadar>
    )
}
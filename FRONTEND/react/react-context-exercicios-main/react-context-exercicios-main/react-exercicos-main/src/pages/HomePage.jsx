import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {goToCardPage} from '../routes/Cordinator'

export default function HomePage(){
    const navigate = useNavigate()
    return(
        <>
            <p>Essa é a pagina do Home</p>

            <Button onClick={()=>goToCardPage(navigate)}>Ver Cards</Button>
        </>
    )
}
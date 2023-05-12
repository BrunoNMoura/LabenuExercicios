import bananinha from '../../assets/banana.jpeg'

import {CardContainer} from './styled'

export default function Card(){
    
    return(
        <CardContainer >
            <img src={bananinha}/>
            <p>{"name"}</p>
            <p>{"species"}</p>
        </CardContainer>
    )

}
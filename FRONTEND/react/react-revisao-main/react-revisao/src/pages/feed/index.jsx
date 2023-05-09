import { useEffect, useState } from "react"
import { FeedConteinerStyled, RecipeCardStyled } from "./styled"
import { ListRecipes } from "../../constants"
import { goToAddRecipePage, goToDetailPage } from '../../routes'
import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { useProtectedPage } from "../../hooks"

export const FeedPage = () => {

    const navigate = useNavigate()
    useProtectedPage(navigate)
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=>{
       ListRecipes()
       .then(data => setRecipes(data))
       .catch((e)=>console.log(e.response))
    },[])

   

const onClickCard = (id) =>{    
    goToDetailPage(navigate,id)
}

const onClickAddButton = ()=>{
    goToAddRecipePage(navigate)
}
    return (
        <FeedConteinerStyled>
            {recipes.map((recipe, index)=>
            <RecipeCardStyled key={index}onClick={()=>onClickCard(recipe.id)}>
                <img src={recipe.imageUrl}/>
                <h3>{recipe.title}</h3>
            </RecipeCardStyled>
           )}
           <Button onClick={()=>onClickAddButton()} variant="add_recipe">+</Button>
        </FeedConteinerStyled>
    )
}
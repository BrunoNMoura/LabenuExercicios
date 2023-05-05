import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetRecipes } from "../../constants"
import { PageConteiner } from "./styled"
import { useProtectedPage } from "../../hooks"



export const RecipeDetailPage = () => {

    const { id } = useParams()
    const [recipe, setRecipe] = useState()
    const navigate = useNavigate()
    useProtectedPage(navigate)

    useEffect(() => {
        GetRecipes(id)
            .then(recipe => setRecipe(recipe))
            .catch(e => alert(e.response.datra.message))
    }, [])

    console.log(recipe)
    return (
        !recipe ? <h1>Não ha receitas com esse id</h1> : (
            <PageConteiner>
                <img src={recipe.imageUrl} alt="Imagem da receita" />
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
            </PageConteiner>
        ))
}
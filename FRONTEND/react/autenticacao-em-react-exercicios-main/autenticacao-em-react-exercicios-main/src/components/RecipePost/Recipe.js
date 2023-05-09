import { useNavigate } from "react-router-dom";
import { Card } from "./styled";
import { goToRecipe } from "../../routes/coordinator";

export default function RecipePost({post})
{
    const navigate = useNavigate()
    return (
        <Card onClick={()=>{goToRecipe(navigate, post.id)}}>
            <h2>{post.title}</h2>
            <img src={post.imageUrl}/>
        </Card>
    )
}
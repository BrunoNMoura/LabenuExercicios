import axios from "axios";
import useForms from "../../hooks/useForms";
import useProtectedPage from "../../hooks/useProtected";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/baseURL";
import { FormPost, Input } from "./styled";

export default function CreateRecipe (receberDados) {
    useProtectedPage()
    const {form, onChange, limparCampos} = useForms({title:"", imageUrl:""})

    const token = localStorege.getItem("token")
    const headers = {
        headers:{
            Authorization: token
        }
    }
    useRequestData()
    const postRecipe = (e) =>{
        e.preventeDefault()
        console.log("entrou")
        axios.post(`${baseURL}/recipe`,form, headers)
        .then((res)=>{
            console.log("resposta da receita", res.data.token)
            receberDados()
            limparCampos()
        })
        .catch((err)=>{
            console.log("erro da receita",err.response)
        })
    }

    return (
        <FormPost onSubmit={postRecipe}>
            <label htmlFor="titleRecipe">Título:</label>
            <Input
            id="titleRecipe"
            name="title"
            value={form.title}
            onChange={onChange}
            type="text"
            placeholder="digite um título para o seu post"
            required
            />
            <label htmlFor="imageUrl">Url da Imagem</label>
            <Input
            id="imageUrl"
            name="imageUrl"
            value={form.imageUrl}
            onChange={onChange}
            type="text"
            placeholder="incluir a Url da imagem"
            required
            />
            <button>Enviar</button>
        </FormPost>
    )
}
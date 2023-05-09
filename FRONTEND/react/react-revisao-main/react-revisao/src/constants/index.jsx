import axios from "axios"

export const BASE_URL = 'https://api-cookenu.onrender.com'

export const Login = async (body) =>{
    const {data} = await axios.post(`${BASE_URL}/user/login`,body)
    console.log(data)
    return data;
}

export const Signup = async (body) =>{
   const {data} = await axios.post(`${BASE_URL}/user/signup`,body)
   return data;
}

export const ListRecipes = async ()=>{
    const {data} = await axios.get(`${BASE_URL}/recipe/all`, {
        headers:{
            Authorization: localStorage.getItem("cookenu.token")
        }
    })
   return data;
}

export const AddRecipe = async (body)=>{
    const {data} = await axios.post(`${BASE_URL}/recipe`, body, {
        headers:{
            Authorization: localStorage.getItem("cookenu.token")
        }
    })
   return data;
}

export const GetRecipes = async (id)=>{
    const {data} = await axios.get(`${BASE_URL}/recipe/${id}`, {
        headers:{
            Authorization: localStorage.getItem("cookenu.token")
        }
    })
   return data;
}

export const validateEmail = email => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)

export const validatePassword = password => /[a-zA-Z0-9]{6,}$/.test(password)

export const validateName = (name, length=2) => new RegExp( `[a-zA-Z]{${length},}$`).test(name)
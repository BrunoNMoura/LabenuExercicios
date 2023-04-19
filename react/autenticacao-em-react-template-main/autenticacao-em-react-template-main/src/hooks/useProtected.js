import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { irParaLogin } from "../Routes/coordinator";

export default function useProtectedPage (){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            irParaLogin(navigate)
        }
    },[navigate])
}
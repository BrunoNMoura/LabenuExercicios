import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";


export default function useProtectedPage (){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToLogin(navigate)
        }
    },[navigate])
}
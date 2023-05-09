import { useState } from "react"
import { useForm } from "../../hooks"
import { CenteredPageConteiner, FormConteiner, EmailInput, PassworInput } from "../../components";
import { Button } from '@chakra-ui/react'
import logo from "../../assets/logo.jpg"
import { Login, validateEmail, validatePassword } from "../../constants";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToSignupPage } from "../../routes";

export const LoginPage = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))        
        try {
           const {token} =  isEmailValid &&  isPasswordValid && await Login ({
            email: form.email,
            password: form.password,
        });        
        localStorage.setItem("cookenu.token",token);
        goToFeedPage(navigate);
        setIsLoggedIn(true)
        } catch (error) {
            console.log(error.response)
        }         
    }

    return (
        <CenteredPageConteiner>
            <FormConteiner onSubmit={onSubmit}>
                <img src={logo} alt="logo do Cookenu" />
                <EmailInput
                    value={form.email}
                    onChange={onChangeInputs}
                    isValid={isEmailValid}
                />
                <PassworInput
                    value={form.password}
                    onChange={onChangeInputs}
                    isValid={isPasswordValid}
                />
                <Button type="submit" variant='form'>Enviar</Button>
                <Button onClick={()=>goToSignupPage(navigate)} type="button" variant="formSecondary">Não possui conta? Cadastre-se.</Button>
            </FormConteiner>
        </CenteredPageConteiner>
    )
}
import { useState } from "react"
import { useForm } from "../../hooks"
import {
    CenteredPageConteiner,
    FormConteiner,
    EmailInput,
    PassworInput,
    NameInput,
} from "../../components";
import { Button } from '@chakra-ui/react'
import logo from "../../assets/logo.jpg"
import { Signup,validateEmail, validateName, validatePassword } from "../../constants";
import { goToFeedPage } from "../../routes";
import { useNavigate } from "react-router-dom";


export const SignupPage = () => {
    const navigate = useNavigate()
    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: "",
        name: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);


    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        setIsNameValid(validateName(form.name))    
        try {
            const {token} =  isEmailValid &&  isPasswordValid && isNameValid && await Signup ({
             email: form.email,
             password: form.password,
             name: form.name,
         });        
         localStorage.setItem("cookenu.token",token);
         goToFeedPage(navigate);
         } catch (error) {
             console.log(error.response)
         }
     
    }

    return (
        <CenteredPageConteiner>
            <FormConteiner onSubmit={onSubmit}>
                <img src={logo} alt="logo do Cookenu" />
                <NameInput
                    value={form.name}
                    onChange={onChangeInputs}
                    isValid={isNameValid}
                />
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
                <Button type="submit" variant='form'>Cadastrar</Button>
            </FormConteiner>
        </CenteredPageConteiner>
    )
}
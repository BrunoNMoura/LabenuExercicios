import { useEffect, useState } from "react"
import { useForm, useProtectedPage } from "../../hooks"
import {
    CenteredPageConteiner,
    FormConteiner,
    TitleInput,
    DescriptionTextArea,
    ImageInput,
} from "../../components";
import { Button } from '@chakra-ui/react'
import { AddRecipe, validateName } from "../../constants";
import { PageTitleStyled } from "./styled";
import { useNavigate } from "react-router-dom";


export const AddRecipePage = () => {

    const [form, onChangeInputs, clearInputs] = useForm({
        description: "",
        title: "",
        imageUrl: ""
    })
    const navigate = useNavigate()
    useProtectedPage(navigate)

    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isUrlValid, setIsUrlValid] = useState(true);
    const [isDescription, setIsDescription]=useState(true)

    useEffect(() => {
        setIsTitleValid(validateName(form.title,4))
        setIsDescription(validateName(form.description,5))
        setIsUrlValid(/http[s]?:\/\/[a-zA-Z]+\.com/.test(form.imageUrl))
    }, [form])
    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            if (isUrlValid && isTitleValid && isDescription) {
                await AddRecipe({
                    title: form.title,
                    description: form.description,
                    imageUrl: form.imageUrl,
                });
                alert("Receita cadastrada com sucesso!")
            }} 
            catch (error) {
                console.log(error.response.data.message)
            }

        }

    return (
            <CenteredPageConteiner>
                <FormConteiner onSubmit={onSubmit}>
                    <PageTitleStyled>Adicionar nova receita</PageTitleStyled>
                    <TitleInput
                        value={form.title}
                        onChange={onChangeInputs}
                        isValid={isTitleValid}
                    />

                    <DescriptionTextArea
                        value={form.description}
                        onChange={onChangeInputs}
                        isValid={isDescription}
                    />

                    <ImageInput
                        value={form.imageUrl}
                        onChange={onChangeInputs}
                        isValid={isUrlValid}
                    />
                    <Button type="submit" variant='form'>Cadastrar</Button>
                </FormConteiner>
            </CenteredPageConteiner>
        )
    }
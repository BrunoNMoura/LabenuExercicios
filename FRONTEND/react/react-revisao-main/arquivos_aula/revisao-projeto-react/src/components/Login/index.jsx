import * as SL from "./style"

const Login = () => {

    return (
        <SL.Conteiner>
            <SL.StyledForm>
                <SL.StyledTitle>Faça Login</SL.StyledTitle>
                <SL.StyledLabel htmlFor="email">E-mail</SL.StyledLabel>
                <SL.StyledInput 
                id="email"
                name="email"
                onChange={''}
                value={'valor'}
                 />            <SL.StyledLabel htmlFor="password">Password</SL.StyledLabel>
                <SL.StyledInput 
                id="password"
                name="password"
                onChange={''}
                value={'valor'} 
                />
                <SL.StyledLink>Fazer Cadastro</SL.StyledLink>
                <SL.StyledButton>Logar</SL.StyledButton>
            </SL.StyledForm>
        </SL.Conteiner>
    )
}

export default Login
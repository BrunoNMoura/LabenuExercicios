import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import useForms from "../../hooks/useForms.js";
import axios from "axios";
import { baseURL } from "../../constants/baseURL.js";


function LoginPage() {
  const navigate = useNavigate();

  const { form, onChange} = useForms({email:"", password:""})

  const enviaLogin = (e) => {
    e.preventDefault()
    axios.post(`${baseURL}/user/login`, form)
    .then((res)=>{
      console.log("resposta do Login", res.data.token)

    localStorage.setItem("token", res.data.token)
    goToFeed(navigate)

    })
    .catch((err)=>{
      console.log("erro do login", err.data.token)
    })
  }
 
  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={enviaLogin}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="nome@email.com"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            placeholder="Digite sua senha"
            required
          />
        </InputContainer>
        <button>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;

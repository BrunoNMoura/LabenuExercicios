import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import useForms from "../../hooks/useForms";
import { baseURL } from "../../constants/baseURL";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();

  const {form,onChange} = useForms ({name:"",email:"",password:""})

  const dadosUsuario = {
    name:form.name,
    email:form.email,
    password:form.password
  }
    const enviarCadastro = (e) =>{
      e.preventDefault()
      axios.post(`${baseURL}/user/signup`, dadosUsuario)
      .then((res)=>{
        console.log("resposta do Signup", res.data.token)
        window.localStorage.setItem("token", res.data.token)
        goToFeed(navigate)
      })
      .catch((err)=>{
        console.log("Resposta do Erro do Signup", err.response.data)
      })
    }

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={enviarCadastro}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            type="text"
            placeholder="nome"
            required
          />
        </InputContainer>
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
            placeholder="crie sua senha"
            required
          />
        </InputContainer>

        <button>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;
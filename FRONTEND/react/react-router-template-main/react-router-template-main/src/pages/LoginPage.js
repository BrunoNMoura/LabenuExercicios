import { useState } from "react";
import Header from "../components/Header";
import { MainContainer } from "../style";

function LoginPage() {

    const [login, setLogin] =useState("");
    const [passwords, setPasswords] = useState("");

  return (
    <MainContainer>
      <Header />
      <h1>Faça seu Login!</h1>
        <form>
            <label>Login:
                <input
                 type="text"
                 value={login}
                 onChange={(e)=>{setLogin(e.target.value)}}
                 />
            </label>
            <label>Senha:
                <input
                type="password"
                value={passwords}
                onChange={(e)=>{setPasswords(e.target.value)}}
                />
            </label>
        </form>
    </MainContainer>
  );
}

export default LoginPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditarUsuario } from "./components/EditarUsuario/Editar";
import AddUsuario from "./components/CadastraUsuario/AddUsuario";
import { Header } from "./components/Header/Header";
import {
  ContainerPrincipal,
  ContainerBarra,
  ButtonCadastro,
  BoxCadastro,
} from "./Appstyle";
import { UrlBase } from "./Constants/Base_Url";
import { Bruno_Name } from "./Constants/Auth_token";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [pageFlow, setPageFlow] = useState(1);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [pesquisa, setPesquisa] = useState({ nome: "", email: "" });

  useEffect(() => {
    getUsuarios();
  }, []);
 
  const getUsuarios = async () => {
    try {
      const res = await axios
        .get(
          UrlBase, {headers:{Authorization: Bruno_Name}}
        )
      setUsuarios(res.data);
    } catch (error) {
      console.log(error.response);
    }  
  };

  const pesquisaUsuario = async (pesquisa) => {    
    try {
      const res = await axios.get(`${UrlBase}/search?name=${pesquisa.nome}&email=${pesquisa.email}`,{headers:{Authorization: Bruno_Name}}
    )
    setUsuarios(res.data);
      setPageFlow(3);
    } catch (error) {
      console.log(error.response)
    }
    };

    

  const onChangeName = (e) => {
    setNome(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const enviarDados = () => {
    const novaPesquisa = {
      nome,
      email,
    };
    setPesquisa(novaPesquisa);

    pesquisaUsuario(pesquisa);

    setNome("")
    setEmail("")

  };

  useEffect(()=>{pesquisaUsuario(pesquisa)},[pesquisa]) 

  const onClickVoltar = () => {
    getUsuarios();
    setPageFlow(1)
  }

  return (
    <div>
      <Header />
      <ContainerPrincipal>
        {pageFlow === 2 ? (
          <BoxCadastro>
            <button onClick={() => setPageFlow(1)}>Voltar</button>
            <AddUsuario getUsuarios={getUsuarios} />
          </BoxCadastro>
        ) : (
          <>
            <ContainerBarra>
              <div>
                <input
                  value={nome}
                  onChange={onChangeName}
                  placeholder="Nome"
                />
                <input
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="Email"
                />
                <button type="submit" onClick={enviarDados}>
                  Pesquisar
                </button> 
              </div>
              {pageFlow === 3 ? (
                <ButtonCadastro onClick={onClickVoltar}>Voltar</ButtonCadastro>
              ) : (
                <ButtonCadastro onClick={() => setPageFlow(2)}>
                  Cadastrar
                </ButtonCadastro>
              )}

            </ContainerBarra>
            {usuarios.map((usuario) => {
              return (
                <EditarUsuario
                  key={usuario.id}
                  id={usuario.id}
                  getUsuarios={getUsuarios}
                  setPageFlow={setPageFlow}
                  pageFlow={pageFlow}
                />
              );
            })}
          </>
        )}
      </ContainerPrincipal>
    </div>
  );
}

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import AddUsuario from "./Componentes/AddUsuario/AddUsuario";
import Usuario from "./Componentes/Usuario/Usuario";

const usuariosLocal = [
  {
    id: 1,
    name: "Muri"
  },
  {
    id: 2,
    name: "Paulinha"
  },
  {
    id: 3,
    name: "Marcelo"
  },
  {
    id: 4,
    name: "Rodrigo"
  },
]
const headers = {headers: {
      Authorization: "bruno-moura-ozemela"
    }}

function App() {
  const [usuarios, setUsuarios] = useState([])

  const getAllUsers = ()=> {

    

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
    headers
        )
        .then((response)=>{         
          setUsuarios(response.data)
        })
        .catch((error)=>{
          console.log(error.response)
        })
  }
  
  useEffect(()=>{getAllUsers()},[])

  return (
    <>
      <p>Para esta aula usaremos a <a href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro" target="_blank" rel="noreferrer">API Labenusers</a></p>
      <AddUsuario 
      headers={headers} 
      getAllUsers={getAllUsers}
      />
      <hr/>
      {usuarios.map((usuario) => {
        return <Usuario
        key={usuario.id} 
        usuario={usuario}
        headers={headers}
        getAllUsers={getAllUsers} 
        />
      })}
    </>
  )
}

export default App;

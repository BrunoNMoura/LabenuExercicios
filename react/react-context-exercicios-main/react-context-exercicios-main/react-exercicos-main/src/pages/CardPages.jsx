import { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { goToHomePage } from "../routes/Cordinator";
import GlobalContext from "../context/GlobalContext";


export default function CardPage() {
const[cardSelect, setCardSelect] = useState(false)
const {users}=useContext(GlobalContext)
  const navigate = useNavigate()
  
  return (
    <>
      <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
      {users.map((user) => {
        return (
          <Cards
          cardSelect={cardSelect}
            setCardSelect={setCardSelect}
            key={user.id}
            name={user.name}
            id={user.id}
          />)
      })}
    </>
  )
}

{/* <div>      
      <Header />
      <h2>Nomes dos usuários</h2>
      <div>
        <div>
          {isLoadingUsers && <img src={LogoLoading} height={70}/>}
          {!isLoadingUsers && isErrorUsers && <p>Ocorreu um erro!</p>}
          {!isLoadingUsers && users && users.length >0 && renderUsers}
        {!isLoadingUsers && !isErrorUsers && users && users.length === 0 && <p>Lista Vazia!</p>}
        </div>       
      </div>            
        </div> */}
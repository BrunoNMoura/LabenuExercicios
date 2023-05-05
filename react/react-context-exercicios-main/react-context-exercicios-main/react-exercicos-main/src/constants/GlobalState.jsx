import { useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import axios from "axios";
import { BASE_URL, HeadersAuthorization } from "./Constants";

export default function GlobalState({children}){
    const [users, setUsers] = useState([])
  
    useEffect(() => {
      getUsers()
    }, [])
    const getUsers = async () => {
      try {
        const res = await axios.get(BASE_URL, HeadersAuthorization)
        setUsers(res.data)
      } catch (error) {
        alert(error.response.data.messagem)
      }
    }
  
    const values = {users}

    return(
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )

}
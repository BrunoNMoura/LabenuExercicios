import LoginPage from "../../components/Login"
import Wellcome from "../../components/Wellcome"
import Header from "../../components/header"

export const HomePage=()=>{
    
    return(
        <>
        <Header/>
        <h1>Home Page</h1>
        <LoginPage/>
        <Wellcome/>
        </>
    )
}
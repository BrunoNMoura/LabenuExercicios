
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import CardPage from "../pages/CardPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";


export default function Router ({users, isLoadingUsers, isErrorUsers}){

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cards" element={<CardPage
                users={users}
                /* isLoadingUsers={isLoadingUsers}
                isErrorUsers={isErrorUsers} */
                />}/>
                <Route path="*" elemnte={<ErrorPage/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import CardPage from "../pages/CardPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cards" element={<CardPage/>}/>
                <Route path="*" elemnte={<ErrorPage/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}
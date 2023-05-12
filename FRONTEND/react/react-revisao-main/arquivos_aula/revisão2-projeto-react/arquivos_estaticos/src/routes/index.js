import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/home-page"
import InstructionPage from "../pages/instruction-page"
import CharacterPage from "../pages/character-page"
import CreateCharacterPage from "../pages/create-character-page"
import PlanetPage from "../pages/planet-page"
import Header from "../components/Header"

export const Router = () =>{


    return(
    <BrowserRouter>
        <Header/>    
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/instructions" element={<InstructionPage/>}/>
            <Route path="/character" element={<CharacterPage/>}/>
            <Route path="/create-character" element={<CreateCharacterPage/>}/>
            <Route path="/planet" element={<PlanetPage/>}/>
            
        </Routes>
    </BrowserRouter>
)}
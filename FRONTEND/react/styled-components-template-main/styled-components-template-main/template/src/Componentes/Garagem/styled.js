import styled from "styled-components";

export const Button = styled.button `
    background-color: orange;
    border: none;
    padding: 10px;
    margin-top:5vh;
    :hover{
        background-color: yellowgreen;
    }
`

export const GaragemConteiner = styled.main`  
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;   
`

export const Estacionamento = styled.section`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 4vw;
    margin-top: 5vh; 
`

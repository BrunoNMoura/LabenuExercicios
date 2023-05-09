import styled from "styled-components";

export const CenteredPageConteiner = styled.div`
    height: 88vh;
    width: 100vw;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: lightgray
`

export const FormConteiner = styled.form`
min-width: 40vw;
max-width: 95vw;
display:flex;
flex-direction:column;
justify-content:space-between;
background-color: white;
border-radius: 10px;
padding:10px;

input, p{
    margin-bottom: 10px;
}
`
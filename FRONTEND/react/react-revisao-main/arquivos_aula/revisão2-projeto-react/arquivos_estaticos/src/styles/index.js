import styled from 'styled-components';
import theme from '../constants/THEME'


export const StyledForm=styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 0.3vw #7bd84f ;
    border-radius: 2vw;
    background-color: #9ad8e6;

`;
export const StyledTitle= styled.p`
    text-transform: uppercase;
    font-size: 1.5vw;
    color: #44281d;
    font-family: 'Kanit', sans-serif;
    font-weight: 800;
    margin: 1.5vw 0vw;
`;
export const StyledLabel=styled.label`
  text-transform: uppercase;
  font-size: 1.8vw;
  color: #44281d;
  font-family: "Roboto";
  font-weight: 600;
`;
export const StyledInput=styled.input`
    width: 70%;
    padding: 0.7vw 1vw;
    margin-top:1vw;
    margin-bottom:1vw;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 1.2vw;
    background-color: white;
    color: #44281d;
    border: none;
    outline: none;
    border-radius: 6px;
     box-shadow: 3px 3px 10px rgba(0,0,0,1),
    -1px -1px 6px rgba(255, 255, 255, 0.4);
    `;
export const StyledLink=styled.a`
    text-transform: uppercase;
    font-size: 1.2vw;
    color: #44281d;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
`;
export const StyledButton=styled.button`
    padding: 17px 40px;
    border-radius: 50px;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 1.3vw;
    transition: all .5s ease;
    margin: 1.4vw 0;
    
    &:hover {
    letter-spacing: 3px;
    background-color: #7bd84f;
    color: hsl(0, 0%, 100%);
    box-shadow: #7bd84f 0px 7px 29px 0px;
    }

    &:active {
    letter-spacing: 3px;
    background-color: black;
    color: hsl(0, 0%, 100%);
    box-shadow:blue 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
    }
`;

export const StyledPageContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background: url(${({image})=>image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: space-around;`

export const StyledTextContainer = styled.div`
    width: 40vw;
    background:${theme.colors.blue100};
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    border-radius:5px;
    opacity: 0.87;
    letter-spacing: 1.5px;
    font-size:1.19rem;

    span{
        font-weight:bolder;
    }
`

export const SButton = styled.button`
    padding: 17px 40px;
    border-radius: 50px;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 1.3vw;
    transition: all .5s ease;
    margin: 1.4vw 0;

    &:hover {
    letter-spacing: 3px;
    background-color: ${theme.colors.green};
    color: hsl(0, 0%, 100%);
    box-shadow: ${theme.colors.green} 0px 7px 29px 0px;
    }

    &:active {
    letter-spacing: 3px;
    background-color: ${theme.colors.green};
    color: hsl(0, 0%, 100%);
    box-shadow:${theme.colors.green} 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
    }
`;

export const StyledContainerCard = styled.div`
    margin-top:12vh;
    display: grid;
	grid-template-columns: repeat(3, 1fr);
    align-self: center;
    align-items: center;
    justify-content: space-evenly;
    justify-items:center;
    row-gap: 16vh;
    grid-auto-flow: row;
`;


export const StyledInputSelectStyle = styled.select`
    width: 70%;
    padding: 0.7vw 1vw;
    margin-top:1vw;
    margin-bottom:1vw;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 1.2vw;
    
    border-radius:50px;
    border: 1px solid ${theme.colors.green};
    color: ${theme.colors.blue800};
    text-align: center;
`















































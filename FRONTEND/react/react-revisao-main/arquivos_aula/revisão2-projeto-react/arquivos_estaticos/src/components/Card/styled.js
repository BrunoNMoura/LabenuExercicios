import styled from "styled-components";
import theme from "../../constants/THEME";

export const  CardContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    border:4px solid ${(props)=>props.selected===props.id?theme.colors.green:theme.colors.blue500};
    background-color: #FAF9F6;
    border-radius:10px;
    width: 24vw;
    line-height: 2;
    /* height: 52vh; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    color: ${theme.colors.blue500};
    font-size:20px;

    p{
        padding-top:2%;
    }

    img{
        width: 82%;
        margin-top:6%;
        height: 30vh;
    }
`
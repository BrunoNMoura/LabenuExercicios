import styled from 'styled-components';
import theme from '../../constants/THEME';

export const CountContainer =styled.div `
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    font-weight:bold;
    //height: 12vh;
    color:${theme.colors.blue800} ;
    background-color:${theme.colors.blue100};

    p{
        margin:5.5vh 0;
    }
`
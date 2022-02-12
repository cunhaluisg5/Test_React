import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 650px;
    background-color: #FFF0F5;
    border-top: 2px solid palevioletred;
    box-shadow: 0px 0px 10px 0px #000000;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    height: 50%;
    margin-top: 10px;
    background-color: #FFF0F5;
    border-top: 2px solid palevioletred;
    box-shadow: 0px 0px 10px 0px #000000;

    button{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50%;
        font-size: 18px;
        font-Weight: bold;
        text-shadow: 2px 2px #000000;
        color: #ffffff;

        &:hover {
            background-color: #410a0a;
            color: #ffff00;
            cursor: pointer;
        }
    }
`;

export const ContainerCard = styled.div`
    width: 50%;
    height: 100%;
`;

export const Card1 = styled.button`
    background-color: #941e1e; 
`;

export const Card2 = styled.button`
    background-color: #f2c0c0;
`;
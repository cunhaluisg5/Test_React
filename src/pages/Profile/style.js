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
    width: 100%;
    height: 650px;
    margin-top: 10px;
    background-color: #FFF0F5;
    border-top: 2px solid palevioletred;
    box-shadow: 0px 0px 10px 0px #000000;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 50%;
    padding: 10px;
    background-color: #8B0000;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px 0px #000000;

    span{
        font-size: 20px;
        color: #ffffff;
        margin: 10px;
    }
`;
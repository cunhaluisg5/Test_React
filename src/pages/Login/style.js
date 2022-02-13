import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    h1{
        font-family: sans-serif;
    };
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 680px;
    margin-top: 10px;
    background-color: #FFF0F5;
    border-top: 2px solid palevioletred;
    box-shadow: 0px 0px 10px 0px #000000;
`;

export const FormCPF = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    margin-bottom: 10px;
    background-color: #FFF0F5;
    border-radius: 5px;

    label{
        margin-left: 10px;
        margin-top: 10px;
        margin-right: 10px;
        font-weight: bold;
        font-size: 14px;
    };

    input{
        margin: 10px;
    };
`;

export const FormPassword = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    margin-bottom: 10px;
    background-color: #FFF0F5;
    border-radius: 5px;

    label{
        margin-left: 10px;
        margin-top: 10px;
        margin-right: 10px;
        font-weight: bold;
        font-size: 14px;
    };

    input{
        margin: 10px;
    };
`;

export const LoginButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        color: white;
        font-size: 15px;
        text-decoration: none;
        background-color: #4169E1;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        width: 40%;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 70%;
    padding: 10px;
    background-color: #e4776c;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px 0px #000000;
`;

export const Title = styled.span`
    font-size: 30px;
    font-weight: bold;
    text-shadow: 2px 2px #000000;

    .first{
        color: #941e1e;
        font-family: Verdana, Arial, Helvetica, sans-serif;
    }

    .second{
        color: #FFF0F5;
        font-family: cursive;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
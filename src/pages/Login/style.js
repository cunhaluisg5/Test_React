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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

export const FormCPF = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;

    label{
        font-weight: bold;
    };

    input{
        margin-left: 20px;
    };
`;

export const FormPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;

    label{
        font-weight: bold;
    };

    input{
        margin-left: 10px;
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
    }
`;
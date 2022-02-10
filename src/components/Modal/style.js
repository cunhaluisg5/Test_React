import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const Salvar = styled.button`
    background-color: #206020;
    color: #ffffff;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
`;

export const Enviar = styled.button`
    margin-left: 10px;
    margin-right: 10px;
    background-color: #002b80;
    color: #ffffff;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
`;

export const Fechar = styled.button`
    background-color: #d3302f;
    color: #ffffff;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
`;

export const Area = styled.textarea`
    width: 60%;
    margin-top: 20px;
    text-align: center;
`;
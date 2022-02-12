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
    flex-direction: column;
    width: 50%;
    height: 50%;
    padding: 10px;
    background-color: #d3302f;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px 0px #000000;
`;

export const Title = styled.span`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 20px;
    padding: 5px;
    text-shadow: 2px 2px #000000;
`;

export const Text = styled.span`
    text-align: justify;
    font-size: 18px;
    color: #ffffff;
    padding: 5px;
`;
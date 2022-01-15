import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #d3302f;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;

    a{
        font-size: 18px;
        text-decoration: none;
        font-family: sans-serif;
        padding: 10px;
        color: #ffffff;
        font-weight: bold;
    }
`;
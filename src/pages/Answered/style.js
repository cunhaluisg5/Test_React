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

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: #f2c0c0;

    thead, tbody{
        width: 100%;
    }

    thead{
        background-color: #d3302f;
        color: #000000;
        font-size: 16px;
    }

    tr{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    };

    th, td{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25%;
        border: 1px solid #000000;
        align-self: stretch;
        text-align: center;
    };

    th{
        &:hover {
            color: #fff000;
        }
    }
`;

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    margin: 10px;
`;
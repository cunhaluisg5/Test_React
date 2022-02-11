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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 50%;
    padding: 10px;
    background-color: #d3302f;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px 0px #000000;

    span{
        font-size: 20px;
        color: #ffffff;
        margin: 10px;
    }
`;

export const Image = styled.img`
    width: 30%;
    height: 80%;
    background-color: #f2c0c0;
`;

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 80%;
    background-color: #f2c0c0;

    tr{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80%;
    };

    td{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: 1px solid #000000;
        align-self: stretch;
        text-align: center;
        font-size: 16px;
    };

    .title{
        font-Weight: bold;
    }
`;
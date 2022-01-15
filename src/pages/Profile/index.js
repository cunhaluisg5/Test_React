import React from "react";

import {Container, Body, Card} from "./style";
import Header from "../../components/Header";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return(        
        <Container>
            <Header/>
            <Body>
                <h1>Perfil</h1>
                <Card>
                    <span>{`Nome: ${user.name}`}</span>
                    <span>{`CPF: ${user.cpf}`}</span>
                    <span>{`Tipo: ${(user.type === "P" ? "Docente" : "Discente")}`}</span>
                    <span>{`Matrícula: ${user.registration}`}</span>
                </Card>
            </Body>
        </Container>
    );
};

export default Profile;
import React from "react";

import { Container, Body, Card, Image, Table } from "./style";
import Header from "../../components/Header";
import Avatar from "../../assets/avatar.png";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Container>
            <Header />
            <Body>
                <h1>Perfil</h1>
                <Card>
                    <Image src={Avatar} />
                    <Table>
                        <tr>
                            <td className="title">NOME:</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td className="title">CPF:</td>
                            <td>{user.cpf}</td>
                        </tr>
                        <tr>
                            <td className="title">TIPO:</td>
                            <td>{(user.type === "P" ? "Docente" : "Discente")}</td>
                        </tr>
                        <tr>
                            <td className="title">MATRÍCULA:</td>
                            <td>{user.registration}</td>
                        </tr>
                    </Table>
                </Card>
            </Body>
        </Container>
    );
};

export default Profile;
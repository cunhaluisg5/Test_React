import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { Container, Body, Card, Card1, Card2, ContainerCard } from "./style";

const Home = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const redirect = (value) => {
        switch (value) {
            case 1:
                navigate("/questionnaire");
                break;
            case 2:
                navigate("/about");
                break;
            case 3:
                navigate("/disciplines");
                break;
            case 4:
                navigate("/answered");
                break;
            case 5:
                navigate("/report");
                break;
            case 6:
                navigate("/performance");
                break;
            default:
                navigate("/");
        }
    }

    return (
        <Container>
            <Header />
            <Body>
                {user.type === 'S' &&
                    <Card>
                        <ContainerCard>
                            <Card1 onClick={() => redirect(1)}>
                                Responder Questionário
                            </Card1>
                            <Card2 onClick={() => redirect(2)}>
                                Sobre
                            </Card2>
                        </ContainerCard>
                        <ContainerCard>
                            <Card2 onClick={() => redirect(3)}>
                                Consultar Disciplinas
                            </Card2>
                            <Card1 onClick={() => redirect(4)}>
                                Questionários Respondidos
                            </Card1>
                        </ContainerCard>
                    </Card>
                }
                {user.type === 'P' &&
                    <Card>
                        <ContainerCard>
                            <Card1 onClick={() => redirect(5)}>
                                Gerar Relatório
                            </Card1>
                            <Card2 onClick={() => redirect(2)}>
                                Sobre
                            </Card2>
                        </ContainerCard>
                        <ContainerCard>
                            <Card2 onClick={() => redirect(3)}>
                                Consultar Disciplinas
                            </Card2>
                            <Card1 onClick={() => redirect(6)}>
                                Consultar Desempenho
                            </Card1>
                        </ContainerCard>
                    </Card>
                }
            </Body>
        </Container>
    );
};

export default Home;
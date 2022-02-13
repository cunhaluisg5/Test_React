import React from "react";

import { Container, Body, Card, Title, Text } from "./style";
import Header from "../../components/Header";

const About = () => {
    return (
        <Container>
            <Header />
            <Body>
                <h1>Sobre</h1>
                <Card>
                    <Title>Sistema Avaliativo</Title>
                    <Text>Projeto simulador de avaliação docente/discente.</Text>
                    <Text>Tem por finalidade permitir ao aluno verificar as disciplinas nas quais está matriculado no
                        período. Bem como questionários pendentes de preenchimento, questionários incompletos e questionários finalizados.
                    </Text>
                    <Text>O discente é capaz de avaliar uma disciplina por meio de questionários com perguntas relacionadas à conduta
                        do docente e perguntas de auto desempenho.
                    </Text>
                    <Text>O docente, por sua vez, é capaz de acompanhar as avaliações dos discentes por meio da geração de gráficos e
                        relatórios de desempenho de disciplinas nas quais este leciona no período.
                    </Text>
                </Card>
            </Body>
        </Container>
    );
};

export default About;
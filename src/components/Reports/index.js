import React from "react";

import { Container, Body, Table } from "./style";

const Reports = ({ objectData, dataChart }) => {
    const obj = objectData[0]
    const discipline = obj.idDiscipline;
    const professor = obj.idProfessor;
    const objectClass = obj.idClass;

    const data = dataChart.map(object => {
        const valueWeight = object.weightedAverage;
        return parseFloat(valueWeight)
    })

    const selectStatus = (value) => {
        if ((value >= 1) && (value < 2)) {
            return 'Péssimo'
        } else if (value >= 2 && value < 3) {
            return 'Ruim'
        } else if (value >= 3 && value < 4) {
            return 'Regular'
        } else if (value >= 4 && value < 5) {
            return 'Bom'
        } else if (value == 5) {
            return 'Excelente'
        }
    }

    return (
        <Container>
            <span>{discipline.title}</span>
            <span>{discipline.code}</span>
            <span>Período: {objectClass.period}</span>
            <span>Docente: {professor.name}</span>

            <Table>
                <thead>
                    <tr>
                        <th>Questão</th>
                        <th>Descrição</th>
                        <th>Média</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {dataChart.map((value, index) => {
                        const question = value.option;
                        const description = value.title;
                        const average = data[index];
                        const status = selectStatus(average);

                        return (
                            <tr key={index}>
                                <td>{question}</td>
                                <td>{description}</td>
                                <td>{average}</td>
                                <td>{status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
};

export default Reports;
import React, { useState, useEffect } from "react";

import { Container, Body, Table, RadioContainer, Input } from "./style";
import Header from "../../components/Header";
import Load from "../../components/Load/load";
import api from "../../services/api";

const AnsweredQuestionnaires = () => {
    const [questionnairesByPeriod, setQuestionnairesByPeriod] = useState([]);
    const [loading, setLoading] = useState(true);
    const [valueRadio, setValueRadio] = useState(0);
    const [period, setPeriod] = useState("");

    useEffect(() => {
        getDisciplines();
    }, []);

    const getDisciplines = async () => {
        try {
            const { _id } = JSON.parse(localStorage.getItem('user'));
            const { questionnairesByPeriod } = (await api.post('/questionnaire/findAllByPeriodFinished',
                { idStudent: _id })).data;

            if (questionnairesByPeriod !== null) {
                setQuestionnairesByPeriod(questionnairesByPeriod);
            }
            setLoading(false);
        } catch (error) {
            console.log("Erro: ", error);
            setLoading(false);
        }
    }

    const renderRadio = () => {
        return (
            <RadioContainer>
                <Input type="radio" value={0} name='radio'
                    checked={valueRadio == 0} onChange={onChangeValue} /> Todos
                <Input type="radio" value={1} name='radio'
                    checked={valueRadio == 1} onChange={onChangeValue} /> Período
                {valueRadio == 1 && <Input type="text" placeholder="Digite o período..." value={period} name='period' onChange={changePeriod} />}
            </RadioContainer>
        );
    }

    const onChangeValue = (event) => {
        const value = event.target.value;
        setValueRadio(value);
    }

    const changePeriod = (event) => {
        const value = event.target.value;
        setPeriod(value);
    }

    const findByPeriod = () => {
        const filtered = questionnairesByPeriod.filter(value => (
            value.idClass.period == period
        ));
        return filtered;
    }

    const questionnaires = valueRadio == 0 ? questionnairesByPeriod : findByPeriod();

    return (
        <Container>
            <Header />
            <Body>
                <h1>Questionários Respondidos</h1>
                {renderRadio()}
                {loading === true && <Load />}
                {questionnaires.length > 0
                    ?
                    <Table>
                        <thead>
                            <tr>
                                <th>DISCIPLINA</th>
                                <th>CÓDIGO</th>
                                <th>DOCENTE</th>
                                <th>TURMA</th>
                                <th>PERÍODO</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionnaires.map(questionnaire => {
                                const { title } = questionnaire.idDiscipline;
                                const codeDiscipline = questionnaire.idDiscipline.code;
                                const { name } = questionnaire.idProfessor;
                                const { code, period } = questionnaire.idClass;
                                const status = questionnaire.status == 'S' && 'Finalizado';
                                return (
                                    <tr key={questionnaire._id}>
                                        <td>{title}</td>
                                        <td>{codeDiscipline}</td>
                                        <td>{name}</td>
                                        <td>{code}</td>
                                        <td>{period}</td>
                                        <td>{status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    : loading === false &&
                    <div>
                        <span>Não há disciplinas encontradas!</span>
                    </div>
                }
            </Body>
        </Container>
    );
};

export default AnsweredQuestionnaires;
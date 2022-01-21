import React, { useState, useEffect } from "react";
import { BsChatSquareText } from "react-icons/bs";

import Header from "../../components/Header";
import Load from "../../components/Load/load";
import Modal from "../../components/Modal";
import Reports from "../../components/Reports";
import api from "../../services/api";
import { Container, Body, Table } from "./style";

const Report = () => {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [dataChart, setDataChart] = useState([]);
    const [objectData, setObjectData] = useState([]);

    useEffect(() => {
        getQuestionnaires();
    }, []);

    const getQuestionnaires = async () => {
        try {
            const { _id } = JSON.parse(localStorage.getItem('user'));
            const object = (await api.post('/questionnaire/findByIdProfessor', { idProfessor: _id, active: true }))
                .data.questionnaires;

            if (object !== null) {
                setQuestionnaires(object);
            }
            setLoading(false);
        } catch (error) {
            console.log("Erro: ", error);
            setLoading(false);
        }
    }

    const getChart = async () => {
        setLoading(true);
        try {
            if (questionnaires != null) {
                const { dataChart } = (await api.post('chartController/chart', questionnaires[0])).data
    
                if (dataChart != null) {
                    setDataChart(dataChart);
                    setIsOpen(true);
                }
            }
        } catch (error) {
            console.log("Erro ", error);
            setLoading(false);
        }
        setLoading(false);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = (object) => {
        setObjectData(object);
        getChart();
    }

    return (
        <Container>
            <Header />
            <Body>
                <h1>Gerar Relatório</h1>
                {loading === true && <Load />}
                {questionnaires.length > 0
                    ?
                    <Table>
                        <thead>
                            <tr>
                                <th>DISCIPLINA</th>
                                <th>CÓDIGO</th>
                                <th>TURMA</th>
                                <th>DOCENTE</th>
                                <th>RELATÓRIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionnaires.map(object => {
                                const obj = object[0]
                                const discipline = obj.idDiscipline;
                                const professor = obj.idProfessor;
                                const objectClass = obj.idClass;
                                return (
                                    <tr key={obj._id}>
                                        <td>{discipline.title}</td>
                                        <td>{discipline.code}</td>
                                        <td>Turma: {objectClass.code}</td>
                                        <td>Docente: {professor.name}</td>
                                        <td className="modal">
                                            <BsChatSquareText className="graphic" onClick={() => openModal(object)} />
                                        </td>
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
                <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} title="Relatório de Desempenho"
                    contents={<Reports objectData={objectData} dataChart={dataChart}/>} />
            </Body>
        </Container>
    );
};

export default Report;
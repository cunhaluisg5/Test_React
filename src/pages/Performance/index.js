import React, { useState, useEffect } from "react";
import { BsGraphUp, BsFillBarChartFill } from "react-icons/bs";

import Header from "../../components/Header";
import Load from "../../components/Load/load";
import Modal from "../../components/Modal";
import BarGraphic from "../../components/BarGraphic";
import LineGraphic from "../../components/LineGraphic";
import api from "../../services/api";
import { Container, Body, Table } from "./style";

const Performence = () => {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [dataChart, setDataChart] = useState([]);
    const [objectData, setObjectData] = useState([]);
    const [option, setOption] = useState(1);

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

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = (object, option) => {
        setOption(option);
        setObjectData(object);
        getChart();
    }

    const getChart = async () => {
        setLoading(true);
        try {
            if (questionnaires != null) {
                const object = (await api.post('chartController/chart', questionnaires[0])).data.dataChart;
                if (object != null) {
                    const chart = object.map((data) => {
                        const title = data.title;
                        const value = parseFloat(data.weightedAverage);
                        return (
                            {
                                name: title,
                                Media: value
                            }
                        );
                    });
                    setDataChart(chart);
                    setIsOpen(true);
                }
            }
        } catch (error) {
            console.log("Erro ", error);
        }
        setLoading(false);
    }

    return (
        <Container>
            <Header />
            <Body>
                <h1>Disciplinas</h1>
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
                                <th>GRÁFICO</th>
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
                                            <BsFillBarChartFill className="graphic" onClick={() => openModal(object, 1)}/> 
                                            <BsGraphUp className="graphic" onClick={() => openModal(object, 2)}/>
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
                <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} title="Performance"
                    contents={option === 1 ? <BarGraphic data={dataChart} /> : <LineGraphic data={dataChart} />} />
            </Body>
        </Container>
    );
};

export default Performence;
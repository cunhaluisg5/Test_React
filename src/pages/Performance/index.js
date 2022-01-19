import React, { useState, useEffect } from "react";
import { BsGraphUp } from "react-icons/bs";

import Header from "../../components/Header";
import Load from "../../components/Load/load";
import Modal from "../../components/Modal";
import api from "../../services/api";
import { Container, Body, Table } from "./style";

const Performence = () => {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);

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

    const openModal = () => {
        setIsOpen(true);
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
                                        <td className="modal" onClick={openModal}><BsGraphUp/></td>
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
                <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} title="Performance"/>
            </Body>
        </Container>
    );
};

export default Performence;
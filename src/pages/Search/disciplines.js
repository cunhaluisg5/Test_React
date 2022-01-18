import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Header from "../../components/Header";
import Load from "../../components/Load/load";
import { Container, Body, Table } from "./style";

const Disciplines = () => {
    const [classes, setClasses] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        searchDisciplines();
    }, []);

    const searchDisciplines = async () => {
        const user = JSON.parse(await localStorage.getItem("user"));
        setUser(user);

        const idUser = user._id;
        await api.post('class/findByIdUser', { idUser, active: true }).then((object) => {
            const { classes } = object.data;
            setClasses(classes);
            setLoading(false);
        }).catch((error) => {
            console.log("Erro: ", error);
            setLoading(false);
        });
    }

    return (
        <Container>
            <Header />
            <Body>
                <h1>Disciplinas</h1>
                {loading === true && <Load />}
                {classes.length > 0
                    ?
                    <Table>
                        <thead>
                        <tr>
                            <th>DISCIPLINA</th>
                            <th>CÓDIGO</th>
                            <th>TURMA</th>
                            <th>DOCENTE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {classes.map(classObject => {
                            const { idDiscipline, _id, code, idProfessor } = classObject;
                            return (
                                <tr key={_id}>
                                    <td>{idDiscipline.title}</td>
                                    <td>{idDiscipline.code}</td>
                                    <td>{code}</td>
                                    <td>{idProfessor.name}</td>
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

export default Disciplines;
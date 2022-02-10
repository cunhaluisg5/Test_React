import React, { useEffect, useState } from "react";
import { BsCardText } from "react-icons/bs";
import { toast } from "react-toastify";

import Header from "../../components/Header";
import Load from "../../components/Load/load";
import Modal from "../../components/Modal";
import Questionnaires from "../../components/Questionnaires";
import api from "../../services/api";
import { Container, Body, Table, RadioContainer } from "./style";

const Questionnaire = () => {
    const [questionnairesByPeriod, setQuestionnairesByPeriod] = useState([]);
    const [valueRadio, setValueRadio] = useState(1);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [question_answer, setQuestion_answer] = useState([]);
    const [commentary, setCommentary] = useState("");

    useEffect(() => {
        getDisciplines();
    }, []);

    const getDisciplines = async () => {
        try {
            const { _id } = JSON.parse(await localStorage.getItem('user'));
            const { data } = (await api.post('/questionnaire/findAllByPeriod',
                { idStudent: _id }));
            const { questionnairesByPeriod } = data

            if (questionnairesByPeriod !== null) {
                setQuestionnairesByPeriod(questionnairesByPeriod);
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    const initial = async (questionnaire, questionAnswer) => {
        const questions = await getQuestions();
        const answers = await getAnswers();

        const list = questionAnswer.map(object => {
            const question = questions.filter(obj => obj._id == object.idQuestion)[0];
            const answer = answers.filter(obj => obj._id == object.idAnswer)[0];

            return ({
                ...object,
                idAnswer: answer,
                idQuestion: question
            })
        });

        const listQuestionAnswer = list.map((object, index) => {
            return list.filter(obj => obj.idQuestion.option == index + 1)[0];
        });

        setQuestion_answer(listQuestionAnswer);
        setCommentary(questionnaire.commentary);
        setQuestions(questions);
        setAnswers(answers);
    }

    const getQuestions = async () => {
        try {
            const response = await api.get('/question/findAll');

            const { questions } = response.data;

            return (questions);

        } catch (err) {
            console.log(err);
        }
    }

    const getAnswers = async () => {
        try {
            const response = await api.get('/answer/findAll');

            const { answers } = response.data;

            return (answers);

        } catch (err) {
            console.log(err);
        }
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = async (questionnaire, option) => {
        await initial(questionnaire, questionnaire.questionAnswer);
        setIsOpen(true);
    }

    const filterQuestionnaires = () => {
        let questionnaires = questionnairesByPeriod;
        if (valueRadio == 0) {
            questionnaires = filterByOption(questionnairesByPeriod, 'I');
        }
        if (valueRadio == 2) {
            questionnaires = filterByOption(questionnairesByPeriod, 'N');
        }
        return questionnaires;
    }

    const filterByOption = (questionnaires, option) => {
        const pendings = questionnaires.filter(object => object.status == option);
        return pendings;
    }

    const questionnaires = filterQuestionnaires();

    const isFinished = (list) => {
        return list.filter(object => object.idAnswer == undefined).length;
    }

    const saveState = async () => {
        try {
            const { _id, questionAnswer } = questionnaires[0];
            const list = {
                idQuestionnaire: _id,
                commentary,
                status: 'I',
                questionAnswer: questionAnswer
            }
            await api.put('/questionnaire/update', list);
            toast.success('Salvo com sucesso!');
        } catch (error) {
            console.log(error)
        }
    }

    const save = async () => {
        try {
            const { _id, questionAnswer } = questionnaires[0];
            const saveQuestionnaire = isFinished(questionAnswer);

            if (saveQuestionnaire <= 0) {
                const list = {
                    idQuestionnaire: _id,
                    commentary,
                    status: 'S',
                    questionAnswer: questionAnswer
                }
                await api.put('/questionnaire/update', list);
                toast.success('Questionário Finalizado!');
            }else{
                toast.error('Finalize o questionário antes de salvar!');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const renderRadio = () => {
        return (
            <RadioContainer>
                <input type="radio" value={0} name='radio'
                    checked={valueRadio == 0} onChange={onChangeValue} /> Incompleto
                < input type="radio" value={1} name='radio'
                    checked={valueRadio == 1} onChange={onChangeValue} /> Todos
                < input type="radio" value={2} name='radio'
                    checked={valueRadio == 2} onChange={onChangeValue} /> Não Respondidos
            </RadioContainer>
        );
    }

    const onChangeValue = (event) => {
        const value = event.target.value;
        setValueRadio(value);
    }

    return (
        <Container>
            <Header />
            <Body>
                <h1>Responder Questionário</h1>
                {renderRadio()}
                {loading === true && <Load />}
                {questionnaires.length > 0
                    &&
                    <Table>
                        <thead>
                            <tr>
                                <th>DISCIPLINA</th>
                                <th>CÓDIGO</th>
                                <th>PROFESSOR</th>
                                <th>TURMA</th>
                                <th>PERÍODO</th>
                                <th>STATUS</th>
                                <th>QUESTIONÁRIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionnaires.map(questionnaire => {
                                const { title } = questionnaire.idDiscipline;
                                const codeDiscipline = questionnaire.idDiscipline.code;
                                const { name } = questionnaire.idProfessor;
                                const { code, period } = questionnaire.idClass;
                                const status = questionnaire.status == 'I' ? 'Incompleto' : 'Pendente';

                                return (
                                    <tr key={questionnaire._id}>
                                        <td>{title}</td>
                                        <td>{codeDiscipline}</td>
                                        <td>{name}</td>
                                        <td>{code}</td>
                                        <td>{period}</td>
                                        <td>{status}</td>
                                        <td className="modal">
                                            <BsCardText className="graphic" onClick={() => openModal(questionnaire, 1)} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                }
                <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} saveState={saveState} save={save} commentary={commentary}
                    setCommentary={setCommentary} title="Questionário" contents={<Questionnaires questionnaires={questionnaires} />} />
            </Body>
        </Container>
    );
};

export default Questionnaire
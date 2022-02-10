import React, { useState, useEffect } from "react";

import { Container, Table } from "./style";
import api from "../../services/api";

const Questionnaires = ({ questionnaires }) => {
    const [radioOption, setRadioOption] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(async () => {
        await getQuestions();
        await getAnswers();
    }, []);

    const getQuestions = async () => {
        try {
            const response = await api.get('/question/findAll');

            const { questions } = response.data;

            setQuestions(questions);

        } catch (err) {
            console.log(err);
        }
    }

    const getAnswers = async () => {
        try {
            const response = await api.get('/answer/findAll');

            const { answers } = response.data;

            setAnswers(answers);

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Container>
            {(questions.length > 0 && answers.length > 0) &&
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>QUESTÃO</th>
                            <th>OPÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionnaires.map((questionnaire, index) => {
                            return questionnaire.questionAnswer.sort((a, b) => {
                                const question_a = questions.filter((question) => question._id === a.idQuestion)
                                    .map(object => {return object.option});
                                const question_b = questions.filter((question) => question._id === b.idQuestion)
                                    .map(object => {return object.option});
                                return question_a - question_b;
                              }).map((object, i) => {
                                const { idAnswer, idQuestion } = object;
                                const question = questions.filter((question) => question._id === idQuestion)[0];
                                const answer = idAnswer !== undefined ? answers.filter((answer) => answer._id === idAnswer)[0] : -1;

                                const onChangeValue = (event) => {
                                    const value = event.target.value;
                                    setRadioOption(value);
                                    questionnaires[index].questionAnswer[i].idAnswer = value;
                                }

                                return <tr key={object._id}>
                                    <td>{question.option}</td>
                                    <td>{question.title}</td>
                                    <td>
                                        {answers.map((objectAnswer) => {
                                            return (
                                                <div key={objectAnswer.option}>
                                                    <input type="radio" value={objectAnswer._id} name={object._id}
                                                        checked={objectAnswer.option === answer.option} onChange={onChangeValue} />
                                                    {objectAnswer.title}
                                                </div>
                                            )
                                        })}
                                    </td>
                                </tr>
                            });
                        })}
                    </tbody>
                </Table>
            }
        </Container>
    );
};

export default Questionnaires;
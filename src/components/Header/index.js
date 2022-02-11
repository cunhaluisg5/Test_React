import React from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

import {Container, Items} from "./style";

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <Container>
            {user.type === 'S' &&
                <Items>
                    <Link to="/home">Início</Link>
                    <Link to="/profile">Perfil</Link>
                    <Link to="/disciplines">Consultar Disciplinas</Link>
                    <Link to="/questionnaire">Responder Questionário</Link>
                    <Link to="/answered">Questionários Respondidos</Link>
                    <Link to="/home">Sobre</Link>
                    <button onClick={logout}>Sair</button>
                </Items>
            }
            {user.type === 'P' &&
                <Items>
                    <Link to="/home">Início</Link>
                    <Link to="/profile">Perfil</Link>
                    <Link to="/disciplines">Consultar Disciplinas</Link>
                    <Link to="/performance">Consultar Desempenho</Link>
                    <Link to="/report">Gerar Relatório</Link>                    
                    <Link to="/home">Sobre</Link>
                    <button onClick={logout}>Sair</button>
                </Items>
            }
        </Container>
    )
};

export default Header;
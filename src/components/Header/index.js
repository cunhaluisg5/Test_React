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
                    <Link to="/home">Consultar Disciplinas</Link>
                    <Link to="/home">Responder Questionário</Link>
                    <Link to="/home">Questionários Respondidos</Link>
                    <Link to="/home">Sobre</Link>
                    <button onClick={logout}>Sair</button>
                </Items>
            }
            {user.type === 'P' &&
                <Items>
                    <Link to="/home">Início</Link>
                    <Link to="/profile">Perfil</Link>
                    <Link to="/home">Consultar Disciplinas</Link>
                    <Link to="/home">Consultar Desempenho</Link>
                    <Link to="/home">Gerar Relatório</Link>                    
                    <Link to="/home">Sobre</Link>
                    <button onClick={logout}>Sair</button>
                </Items>
            }
        </Container>
    )
};

export default Header;
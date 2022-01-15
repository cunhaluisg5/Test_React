import React from "react";
import { Link } from "react-router-dom";

import {Container, Items} from "./style";

const Header = (user) => {
    const { type } = user.user;
    return (
        <Container>
            {type === 'S' &&
                <Items>
                    <Link to="/home">Perfil</Link>
                    <Link to="/home">Consultar Disciplinas</Link>
                    <Link to="/home">Responder Questionário</Link>
                    <Link to="/home">Questionários Respondidos</Link>
                    <Link to="/home">Sobre</Link>
                    <Link to="/home">Sair</Link>
                </Items>
            }
            {type === 'P' &&
                <Items>
                    <Link to="/home">Perfil</Link>
                    <Link to="/home">Consultar Disciplinas</Link>
                    <Link to="/home">Consultar Desempenho</Link>
                    <Link to="/home">Gerar Relatório</Link>                    
                    <Link to="/home">Sobre</Link>
                    <Link to="/home">Sair</Link>
                </Items>
            }
        </Container>
    )
};

export default Header;
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { toast }from "react-toastify";

import {Container, Header, Form, FormCPF, FormPassword, LoginButton} from "./style";
import api from "../../services/api";

function Login() {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () =>{
        await api.post("/user/authenticate", {
            cpf,
            password
        }).then((object) => {
            const {user} = object.data;
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/home");
        }).catch((error) => {
            toast.error("Login Incorreto!");
        });
    }

    return (
        <Container>
            <Header>
                <h1>Login do Sistema</h1>
            </Header>
            <Form>
                <FormCPF>
                    <label>CPF:</label>
                    <input type="text" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
                </FormCPF>
                <FormPassword>
                    <label>Senha:</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </FormPassword>
            </Form>
            <LoginButton>
                <button onClick={login}>Entrar</button>
            </LoginButton>
        </Container>
    );
};

export default Login;
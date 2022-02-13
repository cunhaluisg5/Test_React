import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, Card, Form, FormCPF, FormPassword, LoginButton, Title, FormContainer } from "./style";
import api from "../../services/api";

function Login() {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        await api.post("/user/authenticate", {
            cpf,
            password
        }).then((object) => {
            const { user } = object.data;
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/home");
        }).catch((error) => {
            toast.error("Login Incorreto!");
        });
    }

    return (
        <Container>
            <Form>
                <Card>
                    <Title><span className="first">SISTEMA</span> <span className="second">AVALIATIVO</span></Title>
                    <FormContainer>
                        <FormCPF>
                            <label>CPF:</label>
                            <input type="text" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
                        </FormCPF>
                        <FormPassword>
                            <label>SENHA:</label>
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </FormPassword>
                        <LoginButton>
                            <button onClick={login}>Entrar</button>
                        </LoginButton>
                    </FormContainer>
                </Card>
            </Form>
        </Container>
    );
};

export default Login;